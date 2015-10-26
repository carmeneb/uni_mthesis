db.profiles_phl_working.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
       "assignments_hr_count": { $gt: 0 }
       , "assignments_listed_billed_delta": 0.0
      }
    },

    // Stage 2
    {
      $project: {
      	assignments_hr_count: 1
      	, total_hours: 1
      	, assignments_hr_average: { $divide: [ "$total_hours", "$assignments_hr_count" ] } 
      }
    },

    // Stage 3
    {
      $out: "as_hr_average"
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
