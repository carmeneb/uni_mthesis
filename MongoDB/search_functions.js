
// Searching for text in fields

/// Create an index where to search for text

db.profiles.createIndex( { "details.dev_blurb" : "text" } )

/// Search for text  (example in aggregation pipeline)

{
	$match: {
					$text: { $search: "expert" }
					}
}

// Profiles with Assignment Details

{
	$match: {
	$or: [ { "details.dev_billed_assignments": { $gt: 0.0 } }
					, { "details.dev_total_hours": { $gt: 0.0 } }
					, { "details.assignments.fp.job": { $exists: true } }
					, { "details.assignments.hr.job": { $exists: true } } ]
	}
}
