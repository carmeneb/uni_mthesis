db.qual_fields_add.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $project: { 
             _id: 1
             , profileId: 1
             , __v: 1
             , details: 1
                        
             , worked_on_platform: { $literal: " results inputted in stage 2" }
             , assignments_listed: { $literal: " results inputted in stage 2" }
                   
             , billed_assignments: "$details.dev_billed_assignments"
             , assignments_count: { $literal: " results inputted in stage 3" }
             , assignments_listed_billed_delta: { $literal: " results inputted in stage 4" } 
                  
             , assignments_fp_count: { $literal: " results inputted in stage 2" } 
             , assignments_hr_count: { $literal: " results inputted in stage 2" } 
                  	   
             , total_hours: "$details.dev_total_hours"
             , assignments_total_hours: { $literal: "unknown - find value" } 
                  	   
             , length_on_platform: { $literal: "unknown - find value" } 
             , date_first_worked: { $literal: "unknown - find value" } 
             , date_last_worked: "$details.dev_last_worked_ts"
                  
             , categories_group_count: { $literal: "unknown - find value" } 
             , categories_subgroup_count: { $literal: " results inputted in stage 2" }
                  
             , experiences_count: { $literal: " results inputted in stage 2" }
             , skills_count: { $literal: " results inputted in stage 2" }
             , tests_count: { $literal: " results inputted in stage 3" }
                  
             , education_listed_count: "$education_count"
             , education_high_school: "$qual_other"
             , education_diploma: "$qual_diploma"
             , education_bachelors: "$qual_bachelors"
             , education_masters: "$qual_masters"
             , education_doctor: "$qual_doctor"
                  
                  
             , experiences_listed: { $cond: { if: "$details.experiences.experience", then: true, else: false } }
             , experiences_list_array: { $cond: { if: "$details.experiences.experience.0", then: true, else: false } }
                                             
             , skills_listed: { $cond: { if: "$details.skills.skill.skl_name", then: true, else: null } }
             , skills_list: { $cond: { if: { "$ifNull": ["$details.skills.skill.0", null] }, then: "$details.skills.skill.skl_name", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.skills.skill.skl_name"} } } }
                        
             , tests_listed: { $cond: { if: "$details.tsexams.tsexam", then: true, else: false } }
             , tests_lists: { $cond: { if: "$details.tsexams.tsexam", then: "$details.tsexams.tsexam.ts_name_raw", else: null } } // delete after stage 2
             , tests_list: { $literal: " results inputted in stage 2" } 
                        
             , categories_listed: { $cond: { if: "$details.dev_job_categories_v2.dev_job_categories_v", then: true, else: false } }
             , categories_group_list: { $literal: " results inputted in stage 2" }
             , catergories_groups_lists: "$details.dev_job_categories_v2.dev_job_categories_v.groups.group.name"  // delete after stage 2
             , categories_subgroup_list: { $cond: { if: { "$ifNull": ["$details.dev_job_categories_v2.dev_job_categories_v.0", null] }, then: "$details.dev_job_categories_v2.dev_job_categories_v.name", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.dev_job_categories_v2.dev_job_categories_v.name"} } } }
                  
             , assignments_fp_listed: { $cond: { if: "$details.assignments.fp.job", then: true, else: false } }
                  
             , assignments_fo_first_start_date: { $literal: "unknown - find value" } 
             , assignments_fp_last_end_dates: { $literal: "unknown - find value" } 
             , assignments_fp_start_dates: { $cond: { if: { "$ifNull": ["$details.assignments.fp.job.0", null] }, then: "$details.assignments.fp.job.as_from_full", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.fp.job.as_from_full"} } } }
             , assignments_fp_end_dates: { $cond: { if: { "$ifNull": ["$details.assignments.fp.job.0", null] }, then: "$details.assignments.fp.job.as_to_full", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.fp.job.as_to_full"} } } }
                                 
             , assignments_hr_listed: { $cond: { if: "$details.assignments.hr.job", then: true, else: false } }
                  
             , assignments_hr_first_start_date: { $literal: "unknown - find value" } 
             , assignments_hr_last_end_dates: { $literal: "unknown - find value" } 
             , assignments_hr_start_dates: { $cond: { if: { "$ifNull": ["$details.assignments.hr.job.0", null] }, then: "$details.assignments.hr.job.as_from_full", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.hr.job.as_from_full"} } } }
             , assignments_hr_end_dates: { $cond: { if: { "$ifNull": ["$details.assignments.hr.job.0", null] }, then: "$details.assignments.hr.job.as_to_full", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.hr.job.as_to_full"} } } }
                   
             , assignments_hr_hours:  { $cond: { if: { "$ifNull": ["$details.assignments.hr.job.0", null] }, then: "$details.assignments.hr.job.as_total_hours", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.hr.job.as_total_hours"} } } }
      
      }
    },

    // Stage 2
    {
      $project: { 
             _id: 1
             , profileId: 1
             , __v: 1
             , details: 1
                        
             , worked_on_platform: { $cond: { if: { $or: [  { "$eq": ["$assignments_fp_listed", true] }
                                                			, { "$eq": ["$assignments_hr_listed", true] }
                                                			, { $gt: [ "$billed_assignments", 0.0 ] }
                                                			, { $gt: [ "$total_hours", 0.0 ] } 
                                                			] }
                                                  , then: true, else: false } }
             
             
             , assignments_listed: { $cond: { if: { $or: [ { "$eq": ["$assignments_fp_listed", true] }
                                                		   , { "$eq": ["$assignments_hr_listed", true] } 
                                                		   ] }
                                                  , then: true, else: false } }
             , billed_assignments: 1
             , assignments_count: 1 // stage 3
             , assignments_listed_billed_delta: 1 // stage 4
             
             , assignments_fp_count: { $cond: { if: { "$eq": ["$assignments_fp_listed", true] }, then: {$size: "$assignments_fp_start_dates"}, else: 0 } }
             , assignments_hr_count: { $cond: { if: { "$eq": ["$assignments_hr_listed", true] }, then: {$size: "$assignments_hr_start_dates"}, else: 0 } }
             
             , total_hours: 1
             , assignments_total_hours: 1 // unknown
                  	   
             , length_on_platform: 1 // unknown
             , date_first_worked: 1 // unknown
             , date_last_worked: 1
                  
             , categories_group_count: 1 // unknown
             , categories_subgroup_count: { $cond: { if: "$categories_listed", then:  { $size: "$categories_subgroup_list" }, else: 0 } }
            
             , experiences_count: { $cond: { if: "$experiences_list_array", then: { $size: "$details.experiences.experience" }, else: { $cond: { if: "$experiences_listed", then: 1, else: 0 } } } }
             , skills_count: { $cond: { if: "$skills_listed", then: {$size: "$skills_list"}, else: 0 } }
             , tests_count: 1 // stage 3
            
             , education_listed_count: 1
             , education_high_school: 1
             , education_diploma: 1
             , education_bachelors: 1
             , education_masters: 1
             , education_doctor: 1
                  
             , experiences_listed: 1
             , experiences_list_array: 1
            
             , skills_listed: 1                                 
             , skills_list: 1
                        
             , tests_listed: 1
             , tests_lists: 1
             , tests_list: { $cond: { if: { "$ifNull": ["$tests_lists.0", null] }, then: "$tests_lists", else: { "$map": { "input": ["A"], "as": "el", "in": "$tests_lists"} } } }
                        
             , categories_listed: 1
             , categories_group_list: { $cond: { if: { "$ifNull": ["$catergories_groups_lists.0", null] }, then: "$catergories_groups_lists", else: { "$map": { "input": ["A"], "as": "el", "in": "$catergories_groups_lists"} } } }
             , catergories_groups_lists: 1
             , categories_subgroup_list: 1
                  
             , assignments_fp_listed: 1
                  
             , assignments_fo_first_start_date: 1 // unknown
             , assignments_fp_last_end_dates: 1 // unknown
             , assignments_fp_start_dates: 1
             , assignments_fp_end_dates: 1
                                 
             , assignments_hr_listed: 1
                  
             , assignments_hr_first_start_date: 1 // unknown
             , assignments_hr_last_end_dates: 1
             , assignments_hr_start_dates: 1
             , assignments_hr_end_dates: 1
                   
             , assignments_hr_hours:  1
      }
    },

    // Stage 3
    {
      $project: { 
             _id: 1
             , profileId: 1
             , __v: 1
             , details: 1
                        
             , worked_on_platform: 1
             , assignments_listed: 1
             , billed_assignments: 1
             , assignments_count: { $add : ["$assignments_hr_count", "$assignments_fp_count" ] }
             , assignments_listed_billed_delta: 1 // stage 4
             
             , assignments_fp_count: 1
             , assignments_hr_count: 1
             
             , total_hours: 1
             , assignments_total_hours: 1 // unknown
                  	   
             , length_on_platform: 1 // unknown
             , date_first_worked: 1 // unknown
             , date_last_worked: 1
                  
             , categories_group_count: 1 // unknown
             , categories_subgroup_count: 1
            
             , experiences_count: 1
             , skills_count: 1
             , tests_count: { $cond: { if: "$tests_listed", then: {$size: "$tests_list"}, else: 0 } }
            
             , education_listed_count: 1
             , education_high_school: 1
             , education_diploma: 1
             , education_bachelors: 1
             , education_masters: 1
             , education_doctor: 1
                  
             , experiences_listed: 1
             , experiences_list_array: 1
            
             , skills_listed: 1                                     
             , skills_list: 1
                        
             , tests_listed: 1
             , tests_list: 1
                        
             , categories_listed: 1
             , categories_group_list: 1
             , categories_subgroup_list: 1
                  
             , assignments_fp_listed: 1
                  
             , assignments_fo_first_start_date: 1 // unknown
             , assignments_fp_last_end_dates: 1 // unknown
             , assignments_fp_start_dates: 1
             , assignments_fp_end_dates: 1
                                 
             , assignments_hr_listed: 1
                  
             , assignments_hr_first_start_date: 1 // unknown
             , assignments_hr_last_end_dates: 1
             , assignments_hr_start_dates: 1
             , assignments_hr_end_dates: 1
                   
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
                        
             , worked_on_platform: 1
             , assignments_listed: 1
             , billed_assignments: 1
             , assignments_count: 1
             , assignments_listed_billed_delta: { $subtract: [ "$billed_assignments", "$assignments_count" ] }
             
             , assignments_fp_count: 1
             , assignments_hr_count: 1
             
             , total_hours: 1
             , assignments_total_hours: 1 // unknown
                  	   
             , length_on_platform: 1 // unknown
             , date_first_worked: 1 // unknown
             , date_last_worked: 1
                  
             , categories_group_count: 1 // unknown
             , categories_subgroup_count: 1
            
             , experiences_count: 1
             , skills_count: 1
             , tests_count: 1
            
             , education_listed_count: 1
             , education_high_school: 1
             , education_diploma: 1
             , education_bachelors: 1
             , education_masters: 1
             , education_doctor: 1
                  
             , experiences_listed: 1
            
             , skills_listed: 1                                     
             , skills_list: 1
                        
             , tests_listed: 1
             , tests_list: 1
                        
             , categories_listed: 1
             , categories_group_list: 1
             , categories_subgroup_list: 1
                  
             , assignments_fp_listed: 1
             , assignments_fo_first_start_date: 1 // unknown
             , assignments_fp_last_end_dates: 1 // unknown
             , assignments_fp_start_dates: 1
             , assignments_fp_end_dates: 1
                                 
             , assignments_hr_listed: 1
             , assignments_hr_first_start_date: 1 // unknown
             , assignments_hr_last_end_dates: 1
             , assignments_hr_start_dates: 1
             , assignments_hr_end_dates: 1
             , assignments_hr_hours:  1
             
      }
    },

    // Stage 5
    {
      $out: "profiles_phl_working"
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
