# excel-based-form-demo

This application is intended to make it easier for non-programmers to create forms for their webapplications. The HTML forms are based on Excel files (with the ```.xlsx``` extension) which can be uploaded and gets converted. Currently the uploaded form is only stored in memory but this could easily be extended to a database or premanent HTML file generation.

The Excel sheets are currently formatted as following:

|name|type|id|
|---|---|---|
|Username|Text|1|
|Email|Email|2|
|Confirm Email|Email|3|
|Password|Password|4|

The name is the label that will be displayed along with the form element. The type is the kind of input (for example a plain text field). The id is the unique identifier of the field, this will be used for validation rules that are currently being added.
