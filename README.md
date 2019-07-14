# excel-based-form-demo

This application is intended to make it easier for non-programmers to create forms for their webapplications. The HTML forms are based on Excel files (with the ```.xlsx``` extension) which can be uploaded and gets converted. Currently the uploaded form is only stored in memory but this could easily be extended to a database or premanent HTML file generation.

The Excel sheets are currently formatted as following:

|name|type|id|pattern|validation rule (optional)|
|---|---|---|---|---|
|Username|Text|1|[a-zA-Z0-9]*||
|Email|Email|2|[a-zA-Z0-9]*@[a-zA-Z0-9]*||
|Confirm Email|Email|3|[a-zA-Z0-9]*@[a-zA-Z0-9]*|eq(2)|
|Password|Password|4|[a-zA-Z0-9]*||

The name is the label that will be displayed along with the form element.

The type is the kind of input. The current supported types are: Text, Email, Password, and Label.

The id is the unique identifier of the field, this is used for referencing fields in validation rules.

The pattern is a regex pattern which the value of the field should match (can be anything for label fields).

The validation rule is an optional field with a validation function and reference to another field which should be used in that validation function. The current available validation functions are: equals (eq).
