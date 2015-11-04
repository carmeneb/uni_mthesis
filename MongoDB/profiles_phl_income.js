db.profiles_phl_working.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
       "worked_on_platform": true
       , "assignments_listed_billed_delta": 0.0
       , "date_first_worked": { $type: 9 }
       , "details.assignments.hr.job.as_financial_privacy": { $ne: "1" }
       , "details.assignments.fp.job.as_financial_privacy": { $ne: "1" }
       
      }
    },

    // Stage 2
    {
      $project: {
      profileId:1
      , billed_assignments: 1
      , assignments_fp_count: 1
      , assignments_hr_count: 1
      , total_hours: 1
      , date_first_worked:1
      , date_last_worked: 1
      , length_active: 1
      , assignments_fp_last_end_dates: 1
      , assignments_fp_end_dates:1
      , assignments_hr_last_end_dates: 1
      , assignments_hr_end_dates:1
      , assignments_hr_hours: 1
      , as_fp_charge_array: "$details.assignments.fp.job.as_total_charge"
      , as_hr_charge_array: "$details.assignments.hr.job.as_total_charge"
      
      }
    },

    // Stage 3
    {
      $out: "profiles_phl_income"
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
