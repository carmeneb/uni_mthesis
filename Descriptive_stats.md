
#MongoChef

## Profiles located in the Philippines = 168363

 * ```db.profiles_phl.count()```

 * ```db.profiles.find({"details.dev_country": "Philippines" }).count()```

## Profile Job Assignment Details

### Profiles with *either* Total Hours > 0 *or* Billed Assignments > 0 *or* Hourly Assignment Details *or* Fixed Assignment Details = **43180**
\\\ Profiles converted from strings

`db.profiles_phl.find({ $or: [ { "details.dev_billed_assignments": { $gt: 0.0 } }, { "details.dev_total_hours": { $gt: 0.0 } }, { "details.assignments.fp.job": { $exists: true } }, { "details.assignments.hr.job": { $exists: true } } ] }).count()`


### Profiles with *either* Total Hours > 0 *or* Billed Assignments > 0 *or* Hourly Assignment Details *or* Fixed Assignment Details = **43163**

* ```db.profiles_phl.find { $or: [ { "details.dev_total_hours": { $gt: 0.0 } }, { "details.dev_billed_assignments": { $gt: "0" } }, { "details.assignments.hr.job": { $exists: true } }, { "details.assignments.fp.job": { $exists: true } } ] }```

* ```db.profiles_phl.find {
						{ $or: [ { "details.dev_total_hours": { $gt: 0.0 } }
	  		 				   , { "details.dev_billed_assignments": { $gt: 0.0 } }
	  		 				   , { "details.assignments.hr.job": { $exists: true } }
	  		 				   , { "details.assignments.fp.job": { $exists: true } } ] }
}.count()```

* NB: for "details.assignments.fp" or "details.assignments.hr": { $exists: true } ~ use { $exists: true } or { $type: 3 }*

 * Profiles with *either* Total Hours > 0 *or* Billed Assignments > 0 = **43161**
  * ```db.profiles_phl.find( { $or: [ { "details.dev_total_hours": { $gt: 0.0 } }, { "details.dev_billed_assignments": { $gt: "0" } } ] } ).count()```


 * Profiles *with* Total Hours > 0 = **30040**
  * ```db.profiles_phl.find( { "details.dev_total_hours": { $gt: 0.0 } } ).count()```


 * Profiles *with* Billed Assignments = **43098**
  * ```db.profiles_phl.find( { "details.dev_billed_assignments": { $gt: "0" } } ).count()```
  * ```db.profiles.find({ "details.dev_billed_assignments": { $gt: "0" }, "details.dev_country": "Philippines" }).count()```


#### Profiles *with* Assignment Details *or* Total Hours > 0 *with no* Billed Assignments = **65**

 * ```db.profiles_phl_ad.find( { "details.dev_billed_assignments": "0" } ).count()```


 * Profiles *with* Total Hours > 0 *and no* Billed Assignments  = **63**
  * ```db.profiles_phl.find( { "details.dev_total_hours": { $gt: 0.0 }, "details.dev_billed_assignments": "0" } ).count()```


 * Profiles *with* Assignment Details *and no* Total Hours *and no* Billed Assignments = **2**
  * ```db.profiles_phl_ad.find( { "details.dev_billed_assignments": "0", "details.dev_total_hours": 0.0 } ).count()```


### Profiles with *either no* Total Hours *or no* Billed Assignments *or no* Hourly Assignment Details *or no* Fixed Assignment Details  = **125265** ~ actual: **125200**

 * ```db.profiles_phl.find({$or: [ { "details.dev_total_hours": "0.0" }, { "details.dev_billed_assignments": "0" }, { "details.assignments.hr.job": "" }, { "details.assignments.fp.job": "" } ] } ).count()```

 * ```db.profiles_phl.find( { "details.dev_billed_assignments": { $lt: "1" } }).count()```

 * ```db.profiles.find({ "details.dev_country": "Philippines", "details.dev_billed_assignments": { $lt: "1" } }).count()```

 *NB: The original number includes **Profiles with Assignment Details or Total Hours > 0 with no Billed Assignments = 65***


### Profiles *with* Assignment Details = **42379**

 * ```db.profiles_phl.find( { $or: [ { "details.assignments.fp.job": { $exists: true } }, { "details.assignments.hr.job": { $exists: true } } ] } ).count()```

#### Profiles *with* Billed Assignments *and* Total Hours > 0 *with no* Assignment Details = **784**

 * ```db.profiles_phl_ad.find( { "details.assignments.fp": "", "details.assignments.hr": "" } ).count()```

#### Profiles *with* Fixed Assignments = **26246**
  * db.profiles_phl.find( { "details.assignments.fp": { $type: 3 } } ).count()
  * db.profiles_phl_ad.find( { "details.assignments.fp": { $type: 3 } } ).count()

#### Profiles *with* Hourly Assignments = **33828**
 * ```db.profiles_phl.find( { "details.assignments.hr.job": { $exists: true } } ).count()```
 * ```db.profiles_phl_ad.find( { "details.assignments.hr.job": { $exists: true } } ).count()```
 * ```db.profiles_phl_ad.find( { "details.assignments.hr": { $type: 3 } } ).count()```

#### Profiles *with only* Fixed Jobs = **8551**
 * ```db.profiles_phl.find( { "details.assignments.fp.job": { $exists: true }, "details.assignments.hr": "" } ).count()```
 * ```db.profiles_phl_ad.find( { "details.assignments.fp.job": { $exists: true }, "details.assignments.hr": "" } ).count()```

#### Profiles *with only* Hourly Jobs = **16133**
 * ```db.profiles_phl.find( { "details.assignments.hr.job": { $exists: true }, "details.assignments.fp": "" } ).count()```
 * ```db.profiles_phl_ad.find( { "details.assignments.hr.job": { $exists: true }, "details.assignments.fp": "" } ).count()```

### Profiles *with* Assignments Currently Open = **20506**

 * ```db.profiles_phl.find( { $or: [ { "details.assignments.fp.job.as_to_full": "Present" }, { "details.assignments.hr.job.as_to_full": "Present" } ] } ).count()```
 * ```db.profiles_phl_ad.find( { $or: [ { "details.assignments.fp.job.as_to_full": "Present" }, { "details.assignments.hr.job.as_to_full": "Present" } ] } ).count()```

#### Profiles *with* Fixed Jobs Currently Open = **6844**

 * ```db.profiles_phl.find( { "details.assignments.fp.job.as_to_full": "Present" } ).count()```
 * ```db.profiles_phl_ad.find( { "details.assignments.fp.job.as_to_full": "Present" } ).count()```

#### Profiles *with* Hourly Jobs Currently Open = **17245**

 * ```db.profiles_phl.find( { "details.assignments.hr.job.as_to_full": "Present" } ).count()```
 * ```db.profiles_phl_ad.find( { "details.assignments.hr.job.as_to_full": "Present" } ).count()```

#### Profiles *with* Hourly *and* Fixed Jobs Currently Open = **3583**
 * ```db.profiles_phl.find( { "details.assignments.fp.job.as_to_full": "Present", "details.assignments.hr.job.as_to_full": "Present" } ).count()```


### Profiles *with different* Billed Assignments & Assignment Counts = ***8693***
 * ``` db.profiles_phl_working.find({ "assignments_listed_billed_delta": { $gt: 0.0 } }).count() ```



## Education - all

### Education listed ***121784***
 * ``` db.profiles_phl_working.find({ "education_listed_count": { $gt: 0 } }).count ```

### Have tertiary education ***98221***

  * ```db.profiles_phl_working.find({ $or: [ { "education_diploma": true }, { "education_bachelors": true }, { "education_masters": true }, { "education_doctor": true } ] }).count()```


### Diploma ***5180***
   * ``` db.profiles_phl_working.find({ "education_diploma": true }).count() ```

### Bachelors ***92261***
  * ``` db.profiles_phl_working.find({ "education_bachelors": true }).count() ```

### Masters ***6866***
 * ``` db.profiles_phl_working.find({ "education_masters": true }).count() ```

### Doctorate / PhD ***806***
 * ``` db.profiles_phl_working.find({ "education_doctor": true }).count() ```


## Education - worked

### Education listed ***37825***
  * ``` db.profiles_phl_working.find({ "worked_on_platform": true, "education_listed_count": { $gt: 0 } }).count ```

### Have tertiary education ***33231***

 * ```db.profiles_phl_working.find({ "worked_on_platform": true, $or: [ { "education_diploma": true }, { "education_bachelors": true }, { "education_masters": true }, { "education_doctor": true } ] }).count()```

### Diploma ***3763***
    * ``` db.profiles_phl_working.find({ "worked_on_platform": true, "education_diploma": true }).count() ```

### Bachelors ***30229***
   * ``` db.profiles_phl_working.find({ "worked_on_platform": true, "education_bachelors": true }).count() ```

### Masters ***2407***
  * ``` db.profiles_phl_working.find({ "worked_on_platform": true, "education_masters": true }).count() ```

### Doctorate / PhD ***314***
  * ``` db.profiles_phl_working.find({ "worked_on_platform": true, "education_doctor": true }).count() ```


## Experience ***112770***
  * ```db.profiles_phl_working.find({ "experiences_count": { $gt: 0 } }).count() ```

### experience All
  > summary(experience$experiences_count)
     Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
     0.00    0.00    1.00    1.66    2.00   94.00

     > sum(experience$experiences_count)
     [1] 279549

  > summary(experience$experience_length) // incorrect does not take into account 0 records
     Min. 1st Qu.  Median    Mean 3rd Qu.    Max.    NA's
     0.08    3.66    6.08    7.38    9.42   65.79   55593

     > summary(experience$experience_length)
        Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
       0.000   0.000   3.748   4.943   7.586  65.790

### experience worked
  > summary(worked$experiences_count)
     Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
    0.000   1.000   2.000   2.638   4.000  94.000

    > sum(worked$experiences_count)
    [1] 113916

  > summary(worked$experience_length)  // incorrect does not take into account 0 records
     Min. 1st Qu.  Median    Mean 3rd Qu.    Max.    NA's
    0.164   4.833   7.419   8.491  10.590  54.530    4556

    > summary(worked$experience_length)
       Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
      0.000   4.000   6.748   7.595  10.170  54.530

### experience not_worked
> summary(not_worked$experiences_count)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
  0.000   0.000   1.000   1.323   2.000  51.000

  > sum(not_worked$experiences_count)
  [1] 165633

      > summary(not_worked$experience_length)
         Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
        0.000   0.000   2.499   4.029   6.334  65.790


## Tests

### Without tests
 * ``` db.profiles_phl_working.find({ "tests_listed": false }).count()``` ***58981***

### With tests
 * ``` db.profiles_phl_working.find({ "tests_listed": true }).count() ``` ***109382***

 > summary(tests_worked$tests_count)
    Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
   0.000   2.000   4.000   4.505   6.000  67.000

   > summary(tests_not_worked$tests_count)
      Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
     0.000   0.000   1.000   1.367   2.000  41.000

     > summary(tests_all$tests_count)
        Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
       0.000   0.000   1.000   2.172   3.000  67.000

## Assignment Ranges

#### Billed Assignments

profileId     billed_assignments
~01000041c74fe756d6:    1   Min.   :   1.00   
~0100033173e447046e:    1   1st Qu.:   1.00   
~0100043d2e3730a28f:    1   Median :   3.00   
~010005e5e8e1fbe433:    1   Mean   :  11.33   
~01000917619b8c9a18:    1   3rd Qu.:  10.00   
~010009616ea791b5bb:    1   Max.   :1031.00   
(Other)            :43092      


#### Profiles with 0 <= billed assignments <= 10 = 7386
 * `db.profiles_phl.find ({ "details.dev_billed_assignments": { $gt: "0", $lte: "10" } }).count()`
 * `db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gt: "0", $lte: "10" } }).count()`

#### Profiles with 11 <= billed assignments <= 20 = **10690**

`db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "11", $lte: "20" } }).count()`


#### Profiles with 21 <= billed assignments <= 30 = **5754**


`db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "21", $lte: "30" } }).count()`


#### Profiles with 31 <= billed assignments <= 40 = **3631**


`db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "31", $lte: "40" } }).count()``

#### Profiles with 41 <= billed assignments <= 50 = **2564**

`db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "51", $lte: "60" } }).count()``

`db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "31", $lte: "40" } }).count()``

#### Profiles with 51 <= billed assignments <= 60 = **1901**

`db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "41", $lte: "50" } }).count()``


#### Profiles with 61 <= billed assignments <= 70 = **1475**

db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "61", $lte: "70" } }).count()``

#### Profiles with 71 <= billed assignments <= 80 = **1301**

db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "71", $lte: "80" } }).count()``

#### Profiles with 81 <= billed assignments <= 90 = **1038**

db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "81", $lte: "90" } }).count()``


## Job Categories

#### Profiles with Job Categories = 158730

 query ```db.profiles.find({ "details.dev_country": "Philippines", "details.dev_job_categories_v2.dev_job_categories_v": {$exists: true}}).count()```

#### Profiles without Job Categories = 9633

 query ```db.profiles.find({ "details.dev_country": "Philippines", "details.dev_job_categories_v2.dev_job_categories_v": {$exists: false}}).count()```

   * Profiles without job categories WITH billed assignmennts = 913
     * Query ran: ```db.profiles.find({ "details.dev_country": "Philippines", "details.dev_job_categories_v2.dev_job_categories_v": {$exists: false}, "details.dev_billed_assignments": { $gt: "0" }}).count()```


## Job titles

 * ` db.jobs_phl_all.count() ` ***452142***

 > head(frequency)
representative       customer        service      assistant        support        manager 
         32957          29980          28918          20749          17283          15779



#### Profiles without Blurbs = 9603

query ```db.profiles.find({ "details.dev_country": "Philippines", "details.dev_blurb": "" }).count()```


## Portraits

### Profiles *without* Portraits = **18064**
* `db.profiles_phl.find( {"details.dev_portrait": ""} ).count()`

### Profiles *with* Assignments and without Portraits = **2300**

db.profiles_phl_ad.find( {"details.dev_portrait": ""} ).count()


### Profiles * with* Portraits = 43163

db.profiles_phl_ad.find( { $or: [ { "details.dev_portrait": { $exists: "true" } }, { "details.dev_portrait_32": { $exists: "true" } }, { "details.dev_portrait_100": { $exists: "true" } }, { "details.dev_portrait_50": { $exists: "true" } } ] } ).count()

## Profile Accessibility

#### Profiles Open to oDesk Users only (?) = 168363

    query ``db.profiles.find({ "details.dev_country": "Philippines" },{"details.dev_ui_profile_access": "oDesk Users only"}).count()```

#### Public Profiles (?) = 138679

    query ```db.profiles_phl.find(  { "details.dev_ui_profile_access": "Public" } ).count()```

    query ``db.profiles.find({ "details.dev_country": "Philippines", "details.dev_ui_profile_access": "Public"}).count()```

    , categoires_subgroup_count: {$cond: {if: { $eq: [ "$categoriess_listed_array", true ] }, then: { $size: "$details.dev_job_categories_v2.dev_job_categories_v" }, else:
       { $cond: {if: {$eq: ["$categories_listed", true ] }, then: 1, else: 0 } } } }
