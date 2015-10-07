

db.profiles.createIndex( { "details.dev_blurb" : "text" } )


19:03pm

Aggregation: Text Search $match (stage 1)

{
	$text: { $search: "expert" }
}
