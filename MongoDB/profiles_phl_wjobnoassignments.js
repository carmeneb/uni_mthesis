db.profiles_phl.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
      	"details.dev_billed_assignments": {$gt: "0" } 
      	, "details.assignments.hr": "", $and: [ { "details.assignments.fp": "" } ]
      }
    },

    // Stage 2
    {
      $out: "profiles_phl_noassignments"
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
