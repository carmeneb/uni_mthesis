db.profiles_phl.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $project: {
       _id: 1
       , profileId: 1
       , details: 1
       , total_hours: "$details.dev_total_hours"
       , total_assignments: "$details.dev_billed_assignments"

       , assignments_fp_listed: { $cond: { if: "$details.assignments.fp.job", then: true, else: false } }
       , assignments_fp_count: { $cond: { if: "$details.assignments.fp.job", then: true, else: false } }
       , assignments_fp_start_date: { $cond: { if: { "$ifNull": ["$details.assignments.fp.job.0", null] }, then: "$details.assignments.fp.job.as_from_full", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.fp.job.as_from_full"} } } }
       , assignments_fp_end_date: { $cond: { if: { "$ifNull": ["$details.assignments.fp.job.0", null] }, then: "$details.assignments.fp.job.as_to_full", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.fp.job.as_to_full"} } } }

       , assignments_hr_listed: { $cond: { if: "$details.assignments.hr.job", then: true, else: false } }
       , assignments_hr_count: { $cond: { if: "$details.assignments.hr.job", then: true, else: false } }
       , assignments_hr_start_date: { $cond: { if: { "$ifNull": ["$details.assignments.hr.job.0", null] }, then: "$details.assignments.hr.job.as_from_full", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.hr.job.as_from_full"} } } }
       , assignments_hr_end_date: { $cond: { if: { "$ifNull": ["$details.assignments.hr.job.0", null] }, then: "$details.assignments.hr.job.as_to_full", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.hr.job.as_to_full"} } } }


      }
    },

    // Stage 2
    {
      $project: {
       _id: 1
       , profileId: 1
       , details: 1
       , total_hours: 1
       , total_assignments: 1

       , assignments_fp_count: { $cond: { if: { "$eq": ["$assignments_fp_listed", true] }, then: {$size: "$assignments_fp_start_date"}, else: 0 } }
       , assignments_fp_start_date: 1
       , assignments_fp_end_date: 1

       , assignments_hr_count: { $cond: { if: { "$eq": ["$assignments_hr_listed", true] }, then: {$size: "$assignments_hr_start_date"}, else: 0 } }
       , assignments_hr_start_date: 1
       , assignments_hr_end_date: 1

      }
    },

    // Stage 3
    {
      $project: {
       _id: 1
       , profileId: 1
       , total_hours: 1
       , total_assignments: 1

       , assignments_fp_count: 1
       , assignments_fp_start_date: 1
       , assignments_fp_end_date: 1

       , assignments_hr_count: 1

       , assignments_count: { $add: [ "$assignments_hr_count", "$assignments_fp_count" ] }
       , assignments_hr_start_date: 1
       , assignments_hr_end_date: 1

      }
    },

    // Stage 4 # TO UPDATE
, assignments_count_delta: { $subtract: [ "$total_assignments", "$assignments_count" ] }

    // Stage 5
    {
      $out: "profiles_phl_assignment_stats"
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
