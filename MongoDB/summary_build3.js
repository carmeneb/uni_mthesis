db.profiles_phl.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: { $or: [ { "details.dev_billed_assignments": { $gt: 0.0 } }
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
      	, details: 1

        , total_hours_listed: "$details.dev_total_hours"      	
      	, billed_assignemnts_listed: "$details.dev_billed_assignments"

      	, assignments_fp_listed: { $cond: { if: "$details.assignments.fp.job", then: true, else: false } }
      	, assignments_fp_list_array: { $cond: { if: "$details.assignments.fp.job.0", then: true, else: false } }

      	, assignments_hr_listed: { $cond: { if: "$details.assignments.hr.job", then: true, else: false } }
      	, assignments_hr_list_array: { $cond: { if: "$details.assignments.hr.job.0", then: true, else: false } }

      }
    },

    // Stage 3
    {
      $project: {
       	_id:1
       	, profileId: 1
       	, details: 1

      	, assignments_fp_listed: 1
      	, assignments_fp_list_array: 1
      	, assignments_fp_count: { $cond: { if: "$assignments_fp_list_array", then: { $size: "$details.assignments.fp.job" }, else: { $cond: { if: "$assignments_fp_listed", then: 1, else: 0 } } } }

      	, assignments_hr_listed: 1
      	, assignments_hr_list_array: 1
      	, assignments_hr_count: { $cond: { if: "$assignments_hr_list_array", then: { $size: "$details.assignments.hr.job" }, else: { $cond: { if: "$assignments_hr_listed", then: 1, else: 0 } } } }


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
