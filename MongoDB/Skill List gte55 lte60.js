db.profiles.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
      	"details.dev_country": "Philippines"
      	, "details.dev_billed_assignments": { $gte: "55", $lte: "60" }
      }
    },

    // Stage 2
    {
      $project: {
      	"profileId": 1
      	, "skills": "$details.skills.skill.skl_name" 
      	
      }, 
      
      
    },

    // Stage 3
    {
      $out: "skill_lim"
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
