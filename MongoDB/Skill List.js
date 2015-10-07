db.profiles.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
      	"details.dev_country": "Philippines"
      }
    },

    // Stage 2
    {
      $project: {	
        	_id: 0
      	, profileId: 1
      	, details.skills.skill.skl_name: 1
      	
      }
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
