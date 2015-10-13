db.profiles_phl.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $project: {
       _id: 1
       , profileId: 1
       , __v: 1
       , details: 1
       , education_listed: { $cond: { if: "$details.education.institution", then: true, else: false } }
       , education_list_array: { $cond: { if: "$details.education.institution.0", then: true, else: false } }
      
      }
    },

    // Stage 2
    {
      $project: {
       _id: 1
       , profileId: 1
       , __v: 1
       , details: 1
       , education_listed: 1
       , education_list_array: 1
       , education_count: { $cond: { if: "$education_list_array", then: { $size: "$details.education.institution" }, else: { $cond: { if: "$education_listed", then: 1, else: 0 } } } }
       , qual_bachelors: { $cond: { if: "$details.education.institution", then: false, else: false } }
       , qual_masters: { $cond: { if: "$details.education.institution", then: false, else: false } }
       , qual_doctor: { $cond: { if: "$details.education.institution", then: false, else: false } }
       , qual_diploma: { $cond: { if: "$details.education.institution", then: false, else: false } }
       , qual_other: { $cond: { if: "$details.education.institution", then: false, else: false } }
      
      
      
      }
    },

    // Stage 3
    {
      $project: {
       _id: 1
       , profileId: 1
       , __v: 1
       , details: 1
       , education_listed: 1
       , education_count: 1
       , qual_bachelors: 1
       , qual_masters: 1
       , qual_doctor: 1
       , qual_diploma: 1
       , qual_other: 1
      
      }
    },

    // Stage 4
    {
      $out: "qual_fields_add"
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
