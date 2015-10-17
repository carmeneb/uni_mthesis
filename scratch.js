 , skills_count: { $cond: { if: {"$skills_list": {$not: { $type: 10 } } } } then: 0, else: {$size: "$skills"} }


, worked_on_platform: { $cond: { if: { $or: [ { "$eq": ["$details.assignments.fp.job", true] }
                              , { "$eq": ["$details.assignments.hr.job", true] }, { $gt: [ "$details.dev_billed_assignments", 0.0 ] }, { $gt: [ "$details.dev_total_hours", 0.0 ] } ] }
                                , then: true, else: false } }

, length_on_platform: { $cond: { if: { $or: [ { "$eq": ["$details.assignments.fp.job", true] }
                              , { "$eq": ["$details.assignments.hr.job", true] } ] }
                              , then: true, else: false } } // unknown result to be inputted




                              , first_worked: { $cond: { if: { $or: [ { "$eq": ["$details.assignments.fp.job", true] }
                                                           , { "$eq": ["$details.assignments.hr.job", true] } ] } // unknown results to be inputted






// to be entered into summary






$push: {  {
          $each: [ { wk: 5, score: 8 }, { wk: 6, score: 7 }, { wk: 7, score: 6 } ],
          $sort: { : 1 },
          $slice: 3



 , date_first_worked: { "array1": { "$ifNull": [ "$array1", { "$literal": [] } ]}, "array2": { "$ifNull": [ "$array2", { "$literal": [] } ]}}

 { "$project":
 {
   "array1": { "$ifNull": [ "$array1", { "$literal": [] } ]}
   , "array2": { "$ifNull": [ "$array2", { "$literal": [] } ]}
 }
},


    { "$project": { "allval": { "$setUnion": [ "$array1", "$array2" ]}}},




	, skills_count:

	{ $cond: { if: { "$ifNull": ["$details.assignments.fp.job.0", null] }, then: "$details.skills.skill.skl_name", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.skills.skill.skl_name"} } } }


, worked_on_platform: { $cond: { if: { $or: [ { "$eq": ["$details.assignments.fp.job", true] }
                        , { "$eq": ["$details.assignments.hr.job", true] }, { $gt: [ "$details.dev_billed_assignments", 0.0 ] } ] }
                        , then: true, else: false } }

{ $gt: [ <expression1>, <expression2> ] }



, worked_on_platform: { $cond: { if: { $or: [ { "$eq": ["$details.assignments.fp.job", true] }
                        , { "$eq": ["$details.assignments.hr.job", true] }, {"eq": ["details.dev_billed_assignments", { "$gt": 0.0 } ] }
                        , then: true, else: false } }

	, skills: { $cond: { if: { "$ifNull": ["$details.skills.skill.0", null] }, then: "$details.skills.skill.skl_name", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.skills.skill.skl_name"} } } }


, tests: { $cond: { if: { "$eq": ["$tests_exists", true] }, then:
	  			, { $cond: { if: { "$eq": ["$details.tsexams.tsexams.tsexam.0", true] }, then: "$details.tsexams.tsexam.ts_name_raw", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.tsexams.tsexam.ts_name_raw"} } } },
	  			else: null } }


{ $map: { input: <expression>, as: <string>, in: <expression> } }

, skills: { $cond: { if: { "$ifNull": ["$details.skills.skill.0", null] }, then: "$details.skills.skill.skl_name", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.skills.skill.skl_name"} } } }

, job_subgroups: { $cond: { if: { "$ifNull": ["$job_subgroups_lists.0", null] }, then: "$job_subgroups_lists", else: { "$map": { "input": ["A"], "as": "el", "in": "$job_subgroups_lists"} } } }

, tests: { $cond: { if: { "$ifNull": ["$tests_listed.0", null] }, then: "$tests_listed", else: { "$map": { "input": ["A"], "as": "el", "in": "$tests_listed"} } } }

, tests: { $cond: { if: { "$ifNull": ["$details.tsexams.tsexams.0", null] }, then: "$details.tsexams.tsexam.ts_name_raw", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.tsexams.tsexam.ts_name_raw"} } } }

	, job_subgroups_exists: { $cond: { if: {$eq: ["details.dev_job_categories_v2.dev_job_categories_v": false ] , then: 6, else: 87 } } }

	, tests: { $cond: { if: { { "$eq": ["$details.tsexams.tsexam", true] }, then: 2, else: 40} }

	, job_subgroups_exists: { $cond: { if: {$ne: ["details.dev_job_categories_v2.dev_job_categories_v": false ], then: 6 , else: 87 } } }

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
