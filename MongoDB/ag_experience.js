db.experience_titles_worked.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $group: {
      _id: "$experience"
            	, count: {$addToSet: "$_id"}
      
      }
    },

    // Stage 2
    {
      $project: {
      _id: 1
      ,count: { $size: "$count" }
      }
    },

    // Stage 3
    {
      $out: "ag_experiences_titles_worked"
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
