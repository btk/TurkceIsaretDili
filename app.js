var uygulama = angular.module("ngUygulamam", []);
  uygulama.controller("ngKontrol", function($scope){
    $scope.cumle = "";
    $scope.imgRoot = "http://www.tdk.gov.tr/components/com_gts/assets/images/";
    $scope.escHarf = function(hrf){
      return turkishCase(hrf);
    };
  });

  function turkishCase(hrf){
    switch(hrf) {
    case "ç" :
    case "Ç" :
        return "ct";
        break;
    case "ğ":
    case "Ğ":
        return "gt";
        break;
    case "ş":
    case "Ş":
        return "st";
        break;
    case "ö":
    case "Ö":
        return "öt";
        break;
    case "ü":
    case "Ü":
        return "ut";
        break;
    case "ı":
    case "I":
        return "it";
        break;
    case "İ":
        return "i";
        break;
    case " ":
        return "x";
        break;
    default:
        return hrf.toLowerCase();
    }
  }
