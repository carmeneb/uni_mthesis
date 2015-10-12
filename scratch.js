



, tests: { $cond: { if: { "$ifNull": ["$details.tsexams.tsexams.0", null] }, then: "$details.tsexams.tsexam.ts_name_raw", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.tsexams.tsexam.ts_name_raw"} } } }






{
	details: 1
	, fp_assignment_length: {if: (Array.isarray($details.assignments.fp.job)),
	  							then: {for (var i=0; i < details.assignments.fp.job.length; i++)
	  								         { $subtract: [ "$details.assignments.fp.job[i].as_to_full", "$details.assignments.fp.job[i].as_to_full"] } }

	  							else: {$subtract: [ "$details.assignments.fp.job.as_to_full", "$details.assignments.fp.job.as_to_full"] }
}
}


		, count: { $cond: { if: { "$eq": ["$profiles", { $type: 4 }] }, then: {$size: "$profiles"}, else: 1 } } }


	, count: { $cond: { if: (Array.isarray($profiles)), then: {$size: "$profiles"}, else: 1 } }



_id: 1
    , profileId: 1
    , skills: 1
    , skills_add: { $cond: { if: (Array.isarray(skills)), then: "$details.skills.skill.skl_name", else: "fill" } }

   , skills: { $cond: { if: "$details.skills.skill", then: { $push: { skills: "$details.skills.skill.skl_name", "fill" } }, else: none } }

, worked_on_platform: { $cond: { if: { $or: [ { "assignments_fp_listed": true }
                    , { "assignments_hr_listed": true }
                    , {"assignments_hours_listed": true }
                    , {"assignments_billed_listed":true } ] }, then: true, else: false } }


/// skills listed all

db.profiles_phl.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $limit: 200
    },

    // Stage 2
    {
      $project: {
      		_id: 1
            	, profileId: 1
            	, __v: 1
            	, details: 1

            	, skills_listed_id: { $cond: { if: "$details.skills.skill", then: true, else: false } }
            	, skills_list_array: { $cond: { if: "$details.skills.skill.0", then: true, else: false } }

            	, assignments_fp_listed_id: { $cond: { if: "$details.assignments.fp.job", then: true, else: false } }

            	, assignments_hr_listed_id: { $cond: { if: "$details.assignments.hr.job", then: true, else: false } }

            	, assignments_hours_listed_id:  { $cond: { if: "$details.dev_total_hours", then: true, else: false } }

            	, assignments_billed_listed_id: { $cond: { if: { $ne: [ "$details.dev_billed_assignments.job", "0" ] }, then: true, else: false } }

      }
    },

    // Stage 3
    {
      $project: {
      		_id: 1
            	, profileId: 1
            	, __v: 1
            	, details: 1

            	, skills_listed_id: 1
            	, skills_count_id: { $cond: { if: "$skills_list_array", then: { $size: "$details.skills.skill" }, else: { $cond: { if: "$skills_listed", then: 1, else: 0 } } } }
            	, skills_list: "$details.skills.skill.skl_name"

            	, assignments_fp_listed_id: 1

            	, assignments_hr_listed_id: 1

            	, assignments_hours_listed_id:  1

            	, assignments_billed_listed_id: 1


      }
    },

    // Stage 4
    {
      $project: {
      		_id: 1
            	, profileId: 1
            	, details: 1

            	, skills_listed: 1
            	, skills_count_id: 1
            	, skills_list: "$details.skills.skill.skl_name"

            	, assignments_fp_listed: 1

            	, assignments_hr_listed: 1

            	, assignments_hours_listed:  1

            	, assignments_billed_listed: 1

      }
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
