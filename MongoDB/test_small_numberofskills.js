db.test_small.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $project: {
      	numberofskills: {$size: "$skills"}
      }
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
