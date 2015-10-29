db.profiles_phl_working.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $project: {
          "_id" : 1 
        ,  "profileId" : 1
        ,  "skills_count" : 1
        ,  "worked_on_platform" : 1
      
        ,  "billed_assignments" : 1
        ,  "assignments_count" : 1
        ,  "assignments_listed_billed_delta" : 1
        ,  "assignments_fp_count" : 1
        ,  "assignments_hr_count" : 1
      
        ,  "total_hours" : 1
      
        ,  "length_on_platform" : 1
        ,  "length_active" : 1
        
        ,  "categories_group_count" : 1
        ,  "categories_subgroup_count" : 1
      
        ,  "tests_count" : 1
      
        ,  "experiences_count" : 1
        ,  "experience_years" : "$experience_length"
      
        , education_tertiary: { $cond: { if: "$education_bachelors", then: true, else: 
        							{ $cond: { if: "$education_masters", then: true, else: 
        							  	{ $cond: { if: "$education_doctor", then: true, else: 
        							  	  { $cond: { if: "$education_diploma", then: true, else: false } } } } } } } }
      
      , education_diploma: 1
      , education_bachelors: 1
      , education_bachelors:1
      , education_masters:1
      , education_doctor: 1
      
      
      }
    },

    // Stage 2
    {
      $out: "profiles_reg"
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
