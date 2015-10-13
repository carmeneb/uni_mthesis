db.profiles_phl.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
      $or: [ { "details.dev_billed_assignments": { $gt: 0.0 } }
              , { "details.dev_total_hours": { $gt: 0.0 } }
              , { "details.assignments.fp.job": { $exists: true } }
              , { "details.assignments.hr.job": { $exists: true } } ]
      }
    },

    // Stage 2
    {
      $project: {
      		_id: 1
        	, profileId: 1
        	, __v: 1
        	, details: 1

        	, skills_listed: { $cond: { if: "$details.skills.skill", then: true, else: false } }
        	, skills_list_array: { $cond: { if: "$details.skills.skill.0", then: true, else: false } }

        	, tests_listed: { $cond: { if: "$details.tsexams.tsexam", then: true, else: false } }
        	, tests_list_array: { $cond: { if: "$details.tsexams.tsexam.0", then: true, else: false } }

        	, experiences_listed: { $cond: { if: "$details.experiences.experience", then: true, else: false } }
        	, experiences_list_array: { $cond: { if: "$details.experiences.experience.0", then: true, else: false } }

        	, education_listed: { $cond: { if: "$details.education.institution", then: true, else: false } }
        	, education_list_array: { $cond: { if: "$details.education.institution.0", then: true, else: false } }

        	, categories_listed: { $cond: { if: "$details.dev_job_categories_v2.dev_job_categories_v", then: true, else: false } }
        	, categories_subgroup_list_array: { $cond: { if: "$details.dev_job_categories_v2.dev_job_categories_v.0", then: true, else: false } }

        	, assignments_fp_listed: { $cond: { if: "$details.assignments.fp.job", then: true, else: false } }
        	, assignments_fp_list_array: { $cond: { if: "$details.assignments.fp.job.0", then: true, else: false } }

        	, assignments_hr_listed: { $cond: { if: "$details.assignments.hr.job", then: true, else: false } }
        	, assignments_hr_list_array: { $cond: { if: "$details.assignments.hr.job.0", then: true, else: false } }

        	, assignments_hours_listed:  { $cond: { if: "$details.dev_total_hours", then: true, else: false } }

        	, assignments_billed_listed: { $cond: { if: { $ne: [ "$details.dev_billed_assignments.job", "0" ] }, then: true, else: false } }}

    },

    // Stage 3
    {
      $project: {
      		_id: 1
            	, profileId: 1
            	, __v: 1
            	, details: 1
            	, rating: "$details.dev_adj_score"

      		, worked_on_platform: { $cond: { if: { $or: [ { "$eq": ["$assignments_fp_listed", true] }
                          , { "$eq": ["$assignments_hr_listed", true] } ] }, then: true, else: false } }


            	, skills_listed: 1
            	, skills_list_array: 1
            	, skills_count: { $cond: { if: "$skills_list_array", then: { $size: "$details.skills.skill" }, else: { $cond: { if: "$skills_listed", then: 1, else: 0 } } } }
            	, skills_list: "$details.skills.skill.skl_name"

            	, tests_listed: 1
            	, tests_list_array: 1
            	, tests_count: { $cond: { if: "$tests_list_array", then: { $size: "$details.tsexams.tsexam" }, else: { $cond: { if: "$tests_listed", then: 1, else: 0 } } } }
            	, tests_list: "$details.tsexams.tsexam.ts_name_raw"

            	, experiences_listed: 1
            	, experiences_list_array: 1
            	, experiences_count: { $cond: { if: "$experiences_list_array", then: { $size: "$details.experiences.experience" }, else: { $cond: { if: "$experiences_listed", then: 1, else: 0 } } } }

            	, categories_listed: 1
            	, categories_subgroup_list_array: 1
            	, categories_subgroup_count: { $cond: { if: "$categories_subgroup_list_array", then: { $size: "$details.dev_job_categories_v2.dev_job_categories_v" }, else: { $cond: { if: "$categories_listed", then: 1, else: 0 } } } }
      		, categories_subgroup_list: "$details.dev_job_categories_v2.dev_job_categories_v.name"
      		, categories_group_list: "$details.dev_job_categories_v2.dev_job_categories_v.groups.group.name"

            	, assignments_fp_listed: 1
            	, assignments_fp_list_array: 1
            	, assignments_fp_count: { $cond: { if: "$assignments_fp_list_array", then: { $size: "$details.assignments.fp.job" }, else: { $cond: { if: "$assignments_fp_listed", then: 1, else: 0 } } } }

            	, assignments_hr_listed: 1
            	, assignments_hr_list_array: 1
            	, assignments_hr_count: { $cond: { if: "$assignments_hr_list_array", then: { $size: "$details.assignments.hr.job" }, else: { $cond: { if: "$assignments_hr_listed", then: 1, else: 0 } } } }

            	, education_listed: 1
            	, education_list_array: 1
            	, education_count: { $cond: { if: "$education_list_array", then: { $size: "$details.education.institution" }, else: { $cond: { if: "$education_listed", then: 1, else: 0 } } } }

       }
    },

    // Stage 4
    {
      $project: {
      		_id: 1
            	, profileId: 1
            	, __v: 1
            	, details: 1

            	, skills_listed: 1
            	, skills_count: 1

            	, tests_listed: 1
            	, tests_count: 1

            	, experiences_listed: 1
            	, experiences_count: 1

            	, categories_listed: 1
            	, categories_subgroup_count: 1

            	, assignments_fp_listed: 1
            	, assignments_fp_count: 1

            	, assignments_hr_listed: 1
            	, assignments_hr_count: 1

            	, education_listed: 1
            	, education_count: 1

      }
    },

    // Stage 5
    {
      $out: "profiles_phl_sum"
    }
  ],

  // Options
  {
    cursor: {
      batchSize: 50
    }
  }

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
