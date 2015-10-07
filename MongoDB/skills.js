db.test_100.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $project: { 
          "_id" : 1, 
          "details" : 1, 
          "skills_listed" : {
              "$cond" : [
                  "$details.skills.skill", 
                  true, 
                  false
              ]
          }, 
          "skills_list" : "$details.skills.skill.skl_name"
      }
    },

    // Stage 2
    {
      $project: { 
          "_id" : 1, 
          "details" : 1, 
          "skills_listed" : 1, 
          "skills_list_array" : {
              "$cond" : [
                  "$skills_list.0", 
                  true, 
                  false
              ]
          }, 
          "skills_list" : 1
      }
    },

    // Stage 3
    {
      $project: { 
          "_id" : 1, 
          "details" : 1, 
          "skills_listed" : 1, 
          "skills_count" : {
              "$cond" : {
                  "if" : {
                      "$eq" : [
                          "$skills_list_array", 
                          true
                      ]
                  }, 
                  "then" : {
                      "$size" : "$skills_list"
                  }, 
                  "else" : {
                      "$cond" : {
                          "if" : {
                              "$eq" : [
                                  "$skills_listed", 
                                  true
                              ]
                          }, 
                          "then" : 1, 
                          "else" : 0
                      }
                  }
              }
          }, 
          "skills_list_array" : 1, 
          "skills_list" : 1
      }
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
