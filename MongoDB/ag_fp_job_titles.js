db.profiles_phl.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {

        details.assignments.fp.job: { $exists: true }

      }
    },

    // Stage 2
    {
      $project: {
      	profileId: 1
      	, job_title: { $cond: { if: { "$ifNull": ["$details.assignments.fp.job.0", null] }, then: "$details.assignments.fp.job.as_opening_title", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.fp.job.as_opening_title"} } } }

      }
    },

    // Stage 3
    {
      $unwind: "$job_title"

    },

    // Stage 4 - Additional Option for list of job titles
    {
      $out: "job_titles_fp_list"
    },

    // Stage 5
    {
      $group: {
        _id: "$job_title"
        , profiles: {$addToSet: "$profileId"}

      }
    },

    // Stage 6
    {
      $project: {
       _id: 1
       , count: { $size: "$profiles" }
      }
    },

    // Stage 7
    {
      $out: "job_titles_fp_grouped"
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
