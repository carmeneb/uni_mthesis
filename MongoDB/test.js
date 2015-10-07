db.profiles.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
      	"details.dev_country": "Philippines"
      	, "details.dev_billed_assignments": { $gte: "50", $lte: "55" }
      	
      }
      
    },

    // Stage 2
    {
      $limit: 10
    },

    // Stage 3
    {
      $project: {
      	"profileId": 1
      	, "skills": "$details.skills.skill.skl_name" 
      	
      }
    },

    // Stage 4
    {
      $out: "test"
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
