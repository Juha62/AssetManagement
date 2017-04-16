/// < reference path = "../typings/jquery/jquery.d.ts" />

    class AssingLocationModel {
    public AssetCode: string;
    public LocationCode: string;
    }


function initAssetAssignment() {

    $("#AssignAssetButton").click(function () {

        var LocationCode: string = $("#LocationCode").val();
        var AssetCode: string = $("#AssetCode").val();

        alert("L:" + LocationCode + ", A:" + AssetCode);
        var data: AssingLocationModel = new AssingLocationModel();
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