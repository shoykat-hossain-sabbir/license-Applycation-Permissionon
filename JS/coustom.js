
function toggleHandler(triggerId, elementsSelector, dependentIds) {
    // Handler for the parent checkbox
    $(`#${triggerId}`).on("click", function () {
        const isChecked = $(this).is(":checked");
        $(elementsSelector).toggle(isChecked);
        dependentIds.forEach(id => $(`#${id}`).prop("checked", isChecked));
    });

    // Handler for the dependent checkboxes
    if (dependentIds.length > 0) {
        dependentIds.forEach(id => {
            $(`#${id}`).on("click", function () {
                const allChecked = dependentIds.every(childId => $(`#${childId}`).is(":checked"));
                const anyChecked = dependentIds.some(childId => $(`#${childId}`).is(":checked"));
                $(`#${triggerId}`).prop("checked", allChecked || anyChecked);
            });
        });
    }
}

// Attach handlers
toggleHandler("defaultCheck1", ".frist_box_one, .frist_box_tow", []);
toggleHandler("defaultCheck1_1", ".frist_box_one_theree", [
    "defaultCheck1_1_1", "defaultCheck11_1", "defaultCheck1_11",
]);
toggleHandler("defaultCheck1_2", ".frist_box_tow_theree", [
    "defaultCheck1_2_1", "defaultCheck12_1", "defaultCheck1_21",
]);

toggleHandler("defaultCheck2", ".tow_box_one, .tow_box_tow", []);
toggleHandler("defaultCheck2_1", ".tow_box_one_theree", [
    "defaultCheck2_1_1", "defaultCheck21_1", "defaultCheck2_11",
]);
toggleHandler("defaultCheck2_2", ".tow_box_tow_theree", [
    "defaultCheck2_2_1", "defaultCheck22_1", "defaultCheck2_21",
]);

toggleHandler("defaultCheck3", ".there_box_one, .there_box_tow", []);
toggleHandler("defaultCheck3_1", ".there_box_one_theree", [
    "defaultCheck3_1_1", "defaultCheck3_11", "defaultCheck31_1",
]);
toggleHandler("defaultCheck3_2", ".there_box_tow_theree", [
    "defaultCheck3_2_1", "defaultCheck32_1", "defaultCheck3_21",
]);
