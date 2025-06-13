/* 
 * This script logic prevents users from deleting attachments from closed HR Cases
 * It can be included at the start of the OOTB sys_attachment.delete ACL that includes the
 * function "getAttachmentDeleteAnswer()"
 *
 * When the ACL fails, the "Remove" option is hidden from the attachment manager in the
 * Native UI, and the "Delete" option is hidden from the HR Agent Workspace attachment
 * side menu and the attachment page when viewed directly.
 */

    // CUSTOMIZATION BEGINS -------------------------

    // Get the record to which the attachment is linked
    var caseGR = new GlideRecord(current.table_name);
    if (caseGR.get(current.table_sys_id)) {

        // Get a list of tables extended from the base hr case table
        var table = new GlideTableHierarchy("sn_hr_core_case");
        var tables = table.getTableExtensions();

        // Check if this record is an HR case (including COEs)
        if (caseGR.getTableName() == "sn_hr_core_case" || tables.indexOf(caseGR.getTableName()) != -1) {

            // Hard code values for "Closed Complete" & "Closed Incomplete"
            var closedStates = ["3", "4"];

            // Deny the deletion if the case is closed
            if (closedStates.indexOf(caseGR.getValue('state')) != -1) {
                return false;
            }
        }
    }

    // CUSTOMIZATION ENDS -------------------------
