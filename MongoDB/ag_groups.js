db.profiles_phl_working.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
      "categories_listed": true
      }
    },

    // Stage 2
    {
      $project: {
      categories: "$categories_group_list"
      }
    },

    // Stage 3
    {
      $unwind: "$categories"
    },

    // Stage 4
    {
      $group: {
      _id: "$categories"
      ,count: {$addToSet: "$_id"}
      }
    },

    // Stage 5
    {
      $project: {
      _id: 1
      , count: { $size: "$count" }
      }
    },

    // Stage 6
    {
      $out: "ag_groups_all"
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
