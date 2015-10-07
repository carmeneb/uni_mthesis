db.profiles_phl.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
      	$or: [ 	{ "details.dev_total_hours": { $gt: 0.0 } }
      			, {"details.dev_billed_assignments": { $gt: "0" } }
      			, { "details.assignments.hr.job": { $exists: true } }
      			, { "details.assignments.fp.job": { $exists: true } } 
      		 ]
      }
    },

    // Stage 2
    {
      $out: "profiles_phl_wassnmts"
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
