# sn-tips
Useful tips, tables, and scripts for ServiceNow development.

## Tables
- m2m_connected_content.list
  - Connected Content. Requires manual "Include in Update Set" to ensure the Assigned Topic on a form/cat item is carried through migration.

## Tips
- In order to see records that are "NOT ONE OF" a list you provide, modify the URL directly (since that's not an OOB option for most fields)
  - Replace the capitalized "IN" with "NOT%20IN"
  - Example:
    - https://...sysparm_query%3Dfield_name**IN**text1,text2...
    - https://...sysparm_query%3Dfield_name**NOT%20IN**text1,text2...
