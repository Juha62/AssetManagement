/// < reference path = "../typings/jquery/jquery.d.ts" />
var AssingLocationModel = (function () {
    function AssingLocationModel() {
    }
    return AssingLocationModel;
}());
function initAssetAssignment() {
    $("#AssignAssetButton").click(function () {
        var LocationCode = $("#LocationCode").val();
        var AssetCode = $("#AssetCode").val();
        alert("L:" + LocationCode + ", A:" + AssetCode);
        var data = new AssingLocationModel();
        data.LocationCode = LocationCode;
        data.AssetCode = AssetCode;
        /// Lähetetään Json-muotoista dataa palvelimelle
        $.ajax({
            type: "POST",
            url: "/Asset/AssignLocation",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (data) {
                if (data.success == true) {
                    alert("Asset successfully assigned");
                }
                else {
                    alert("There was an error:" + data.error);
                }
            },
            dataType: "json"
        });
    });
}
//# sourceMappingURL=Logic.js.map