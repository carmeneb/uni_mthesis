db.profiles_phl_working.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
      "worked_on_platform": false
      , "experiences_listed": true

      }
    },

    // Stage 2
    {
      $project: {
      experience: { $cond: { if: { "$ifNull": ["$details.experiences.experience.0", null] }, then: "$details.experiences.experience.exp_title_raw", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.experiences.experience.exp_title_raw"} } } }

      }
    },

    // Stage 3
    {
      $unwind: "$experience"
    },

    // Stage 4
    {
      $project: {
      _id: 0
      ,experience:1
      }
    },

    // Stage 5
    {
      $out: "experience_titles_not_worked"
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
