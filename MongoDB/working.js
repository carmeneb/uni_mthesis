db.qual_fields_add.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $limit: 100
    },

    // Stage 2
    {
      $project: {
       _id: 1
       , profileId: 1
       , __v: 1
       , details: 1
      
       , education_count: 1
       , qual_bachelors: 1
       , qual_masters: 1
       , qual_doctor: 1
       , qual_diploma: 1
       , qual_high_school: "$qual_other"
       
       , worked_on_platform: { $cond: { if: { $or: [ { "$eq": ["$details.assignments.fp.job", true] }
                                		, { "$eq": ["$details.assignments.hr.job", true] }, { $gt: [ "$details.dev_billed_assignments", 0.0 ] }, { $gt: [ "$details.dev_total_hours", 0.0 ] } ] }
                                      , then: true, else: false } }
                                    
       , billed_assignments: "$details.dev_billed_assignments"
       , total_hours: "$details.dev_total_hours"
       , date_first_worked: { $cond: { if: { $or: [ { "$eq": ["$details.assignments.fp.job", true] }
                                		, { "$eq": ["$details.assignments.hr.job", true] } ] }
                                		, then: true, else: false } }
       , date_last_worked: "$details.dev_last_worked_ts"
      
      
       , assignments_listed: { $cond: { if: { $or: [ { "$eq": ["$details.assignments.fp.job", true] }
                                		, { "$eq": ["$details.assignments.hr.job", true] } ] }
                                		, then: true, else: false } }
       , assignments_count: { $cond: { if: { $or: [ { "$eq": ["$details.assignments.fp.job", true] }
                                		, { "$eq": ["$details.assignments.hr.job", true] } ] }
                                		, then: true, else: false } }
      
       , assignments_fp_listed: { $cond: { if: "$details.assignments.fp.job", then: true, else: false } }
       , assignments_fp_count: { $cond: { if: "$details.assignments.fp.job", then: true, else: false } }
       , assignments_fp_start_date: { $cond: { if: { "$ifNull": ["$details.assignments.fp.job.0", null] }, then: "$details.assignments.fp.job.as_from_full", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.fp.job.as_from_full"} } } }
       , assignments_fp_end_date: { $cond: { if: { "$ifNull": ["$details.assignments.fp.job.0", null] }, then: "$details.assignments.fp.job.as_to_full", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.fp.job.as_to_full"} } } }
                     
       , assignments_hr_listed: { $cond: { if: "$details.assignments.hr.job", then: true, else: false } }
       , assignments_hr_count: { $cond: { if: "$details.assignments.hr.job", then: true, else: false } }
       , assignments_hr_start_date: { $cond: { if: { "$ifNull": ["$details.assignments.hr.job.0", null] }, then: "$details.assignments.hr.job.as_from_full", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.hr.job.as_from_full"} } } }
       , assignments_hr_end_date: { $cond: { if: { "$ifNull": ["$details.assignments.hr.job.0", null] }, then: "$details.assignments.hr.job.as_to_full", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.hr.job.as_to_full"} } } }
       
       , assignments_hr_hours:  { $cond: { if: { "$ifNull": ["$details.assignments.hr.job.0", null] }, then: "$details.assignments.hr.job.as_total_hours", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.hr.job.as_total_hours"} } } }
      
       , skills_count: { $cond: { if: "$details.skills.skill", then: true, else: false } }
       , skills_listed: { $cond: { if: { "$ifNull": ["$details.skills.skill.0", null] }, then: "$details.skills.skill.skl_name", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.skills.skill.skl_name"} } } }
      
       , tests_count: { $cond: { if: "$details.tsexams.tsexam", then: true, else: false } }
       , tests_listed: { $cond: { if: "$details.tsexams.tsexam", then: "$details.tsexams.tsexam.ts_name_raw", else: null } }
      
       , experiences_listed: { $cond: { if: "$details.experiences.experience", then: true, else: false } }
       , experiences_list_array: { $cond: { if: "$details.experiences.experience.0", then: true, else: false } }
      
      }
    },

    // Stage 3
    {
      $project: {
       _id: 1
       , profileId: 1
       , __v: 1
       , details: 1
      
       , education_count: 1
       , qual_bachelors: 1
       , qual_masters: 1
       , qual_doctor: 1
       , qual_diploma: 1
       , qual_high_school: 1
      
       , worked_on_platform: 1       
       , billed_assignments: 1
       , total_hours: 1
       
       , date_first_worked: 1 
       , date_last_worked: 1
      
      
       , assignments_listed: { $cond: { if: { $or: [ { "$eq": ["$assignments_fp_listed", true] }
                                		, { "$eq": ["$assignments_hr_listed", true] } ] }
                                		, then: true, else: false } }  			
      
       , assignments_count: 1
      
       , assignments_fp_listed: 1
       , assignments_fp_count: { $cond: { if: { "$eq": ["$assignments_fp_listed", true] }, then: {$size: "$assignments_fp_start_date"}, else: 0 } }
       , assignments_fp_start_date: 1
       , assignments_fp_end_date: 1
                    
       , assignments_hr_listed: 1
       , assignments_hr_count: { $cond: { if: { "$eq": ["$assignments_hr_listed", true] }, then: {$size: "$assignments_hr_start_date"}, else: 0 } }
       , assignments_hr_start_date: 1
       , assignments_hr_end_date: 1
        
       , assignments_hr_hours:  1
      
      }
    },

    // Stage 4
    {
      $project: {
       _id: 1
       , profileId: 1
       , __v: 1
       , details: 1
      
       , education_count: 1
       , qual_bachelors: 1
       , qual_masters: 1
       , qual_doctor: 1
       , qual_diploma: 1
       , qual_high_school: 1
      
       , worked_on_platform: 1       
       , billed_assignments: 1
       , total_hours: 1
       
       , date_first_worked: 1
       , date_last_worked: 1
      
       , assignments_count: { $add: [ "$assignments_hr_count", "$assignments_fp_count" ] }
      
       , assignments_fp_count: 1
       , assignments_fp_start_date: 1
                    
       , assignments_hr_count: 1
       , assignments_hr_start_date: 1
       , assignments_hr_hours:  1
      
      }
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
