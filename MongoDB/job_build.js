db.profiles_phl.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $project: {
      	_id: 1
      	, details: 1

      	, total_hours:  "$details.dev_total_hours"
      	, billed_assignments: "$details.dev_billed_assignments"

      	, fp_start: "$details.assignments.fp.job.as_from_full"
      	, fp_end: "$details.assignments.fp.job.as_from_to"
      	, fp_hours_precise: { $cond: { if: "$details.assignments.fp.job.as_total_hours_precise_to", then: "$details.assignments.fp.job.as_total_hours_precise_to", else: 0 } }
      	, fp_hours: { $cond: { if: "$details.assignments.fp.job.as_total_hours_to", then: "$details.assignments.fp.job.as_total_hours_to", else: 0 } }

      	, hr_start: "$details.assignments.hr.job.as_from_to"
      	, hr_end: "$details.assignments.hr.job.as_from_to"
      	, hr_hours_precise: "$details.assignments.hr.job.as_total_hours_precise_to"
      	, hr_hours: "$details.assignments.hr.job.as_total_hours_to"

      }
    },

    // Stage 2
    {
      $project: {
      	_id: 1
      	, details: 1

      	, total_hours:  1
      	, billed_assignments: 1

      	, fp_start: 1
      	, fp_end: 1
      	, fp_hours_precise: 1
      	, fp_hours: 1

      	, hr_start: 1
      	, hr_end: 1
      	, hr_hours_precise: 1
      	, hr_hours: 1
      	, hr_total_hours: 1

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
