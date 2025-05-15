import styles from "./GraphSVG.module.css";

const CIRCLE_DATA = [
  { x: "292", y: "279", number: "1" },
  { x: "637", y: "417", number: "2" },
  { x: "848", y: "102", number: "3" },
];

type GraphSVGProps = {
  handleCircleClick: (number: string) => void;
  activeCircles: number[];
  inactiveCircles: number[];
};

export default function GraphSVG({
  handleCircleClick,
  activeCircles,
  inactiveCircles,
}: GraphSVGProps) {
  return (
<svg width="924" height="490" viewBox="0 0 924 490" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8223_36841)">
<rect width="924" height="490" rx="8" fill="#A3DAFF"/>
<path d="M223 99.5991C35.8 -0.400948 -94.3333 67.2657 -136 113.599V315.599H1025.5V35.0986C907.9 -66.5014 776.167 -7.23472 725 35.0986C635.667 98.2654 410.2 199.599 223 99.5991Z" fill="#C1E6FF" fill-opacity="0.45"/>
<rect x="-6" y="276" width="943" height="235" fill="#D9D9D9"/>
<rect x="-286" y="274" width="1268" height="103" fill="#909090"/>
<path d="M119.5 275.5L0 462V493.5H927.5V462L815.5 275.5H119.5Z" fill="#909090"/>
<path d="M583 455H610L620 510.5H574L583 455Z" fill="white"/>
<path d="M583 416H610L605 372H587.5L583 416Z" fill="white"/>
<path d="M71.5 350H860L868 362H64L71.5 350Z" fill="white"/>
<path d="M112 288.026L823 288.026L827.5 295.027L104.5 297L112 288.026Z" fill="white"/>
<path d="M472.552 318.124L457 282.072C476.522 281.069 488.695 286.529 496.794 293.882C516.131 311.439 506.399 318.124 497.709 318.664L472.552 318.124Z" fill="#343945"/>
<path d="M469.812 312.166L459.446 288.089C472.587 287.443 477.796 290.361 484.825 295.749C497.59 305.533 493.518 312.166 488.042 312.166H469.812Z" fill="#72CEEC"/>
<path d="M469.49 312.034L465.085 302.112C471.817 307.62 483.091 302.297 488.945 299.278L488.949 299.282C491.971 302.617 494.084 304.948 494.084 307.073C494.084 315.76 472.06 312.388 469.49 312.034Z" fill="#22B3E2"/>
<path d="M111.457 318.124L127.009 282.072C107.487 281.069 95.3142 286.529 87.215 293.882C67.8776 311.438 77.6096 318.124 86.3002 318.664L111.457 318.124Z" fill="#343945"/>
<path d="M114.197 312.165L124.563 288.089C111.422 287.443 106.213 290.361 99.1839 295.748C86.4194 305.532 90.4912 312.165 95.9667 312.165H114.197Z" fill="#72CEEC"/>
<path d="M114.519 312.033L118.924 302.112C112.192 307.619 100.918 302.297 95.064 299.277L95.0599 299.282C92.0377 302.617 89.925 304.948 89.925 307.073C89.925 315.759 111.949 312.388 114.519 312.033Z" fill="#22B3E2"/>
<g filter="url(#filter0_i_8223_36841)">
<rect x="84.6782" y="450.276" width="64.9504" height="103.372" rx="12.497" fill="#1F1D22"/>
</g>
<g filter="url(#filter1_i_8223_36841)">
<rect x="433.215" y="450.276" width="64.9504" height="103.372" rx="12.497" fill="#1F1D22"/>
</g>
<path d="M117.611 500.133C101.877 493.18 92.7594 462.169 90.1675 447.532H489.018C491.579 477.537 472.856 495.101 463.861 500.133C448.858 509.647 345.548 510.805 295.081 510.195C242.481 509.738 133.346 507.085 117.611 500.133Z" fill="#1F1E29"/>
<path d="M94.7405 368.403C96.1657 342.393 137.315 258.474 159.324 216.639C160.432 214.531 162.391 213.018 164.71 212.474C268.073 188.257 373.865 202.002 417.113 212.629C418.977 213.087 420.563 214.168 421.672 215.733C450.434 256.35 480.56 334.022 492.219 368.403C515.272 420.363 501.824 444.94 492.219 450.734C356.098 465.371 170.516 456.833 94.7405 450.734C66.1989 433.17 82.8482 388.528 94.7405 368.403Z" fill="#424652"/>
<path d="M94.7407 368.403C94.7407 357 105.5 332 105.5 332C318 368.403 427.5 343 479 332.5C479 332.5 480.5 334.5 492.219 368.403C515.272 420.363 501.825 444.941 492.219 450.734C356.098 465.371 170.516 456.833 94.7407 450.734C66.1991 433.17 82.8484 388.528 94.7407 368.403Z" fill="#313743"/>
<path d="M122.643 311.227L173.871 219.024C295.081 207.398 355 214.259 407.601 219.024L458.372 311.227C452.883 328.608 130.418 326.779 122.643 311.227Z" fill="#1E2024"/>
<g filter="url(#filter2_i_8223_36841)">
<path d="M381.987 458.509H201.772C201.772 491.808 219.153 494.644 229.673 494.644H356.372C379.7 494.644 382.292 471.926 381.987 458.509Z" fill="#11151E"/>
</g>
<g filter="url(#filter3_d_8223_36841)">
<path d="M95.6553 451.648C65.0102 438.841 79.949 393.254 90.6216 372.061C267.36 417.069 433.212 390.814 494.046 372.061C516.001 426.217 501.364 448.446 492.216 451.191C341.458 469.853 168.839 459.424 95.6553 451.648Z" fill="#1F1E29"/>
</g>
<path d="M392.558 490.442L400.476 464.527C400.904 463.126 402.197 462.169 403.663 462.169H459.306C461.687 462.169 463.3 464.594 462.379 466.79L454.793 484.88C453.34 488.345 450.066 490.703 446.318 490.983L395.993 494.739C393.655 494.913 391.873 492.683 392.558 490.442Z" fill="#0F0F10"/>
<path d="M397.056 480.058L403.465 465.953C404.005 464.763 405.192 463.999 406.499 463.999H458.312C460.928 463.999 462.524 466.875 461.14 469.094L455.784 477.683C454.052 480.461 451.07 482.214 447.801 482.378L400.257 484.765C397.764 484.89 396.023 482.33 397.056 480.058Z" fill="#292C33"/>
<path d="M399.635 473.404L404.089 465.668C404.684 464.635 405.785 463.999 406.977 463.999H451.033C453.818 463.999 455.374 467.212 453.648 469.397L450.806 472.993C448.996 475.284 446.275 476.669 443.358 476.784L402.655 478.396C400.034 478.5 398.326 475.676 399.635 473.404Z" fill="#DF5107"/>
<path d="M191.2 490.442L183.282 464.527C182.854 463.126 181.56 462.169 180.095 462.169H124.452C122.07 462.169 120.458 464.594 121.378 466.79L128.964 484.88C130.418 488.345 133.692 490.703 137.44 490.983L187.765 494.739C190.103 494.913 191.885 492.683 191.2 490.442Z" fill="#0F0F10"/>
<path d="M186.702 480.058L180.294 465.953C179.753 464.763 178.567 463.999 177.259 463.999H125.446C122.83 463.999 121.234 466.875 122.619 469.094L127.974 477.683C129.706 480.461 132.688 482.214 135.957 482.378L183.501 484.765C185.994 484.89 187.735 482.33 186.702 480.058Z" fill="#292C33"/>
<path d="M184.123 473.404L179.669 465.668C179.075 464.635 177.973 463.999 176.781 463.999H132.725C129.94 463.999 128.384 467.212 130.11 469.397L132.952 472.993C134.762 475.284 137.483 476.669 140.401 476.784L181.103 478.396C183.724 478.5 185.432 475.676 184.123 473.404Z" fill="#DF5107"/>
<path d="M487.438 379.858C488.958 366.976 482.472 351.393 476.326 340.655C473.613 335.915 468.22 333.531 462.807 334.254C378.196 345.548 400.797 372.745 425.865 386.81C427.945 387.978 430.305 388.527 432.69 388.527H475.77C481.358 388.527 486.783 385.408 487.438 379.858Z" fill="#80201E"/>
<circle cx="465.195" cy="362.456" r="12.8071" fill="#A8373B"/>
<circle cx="430.891" cy="365.658" r="11.4349" fill="#A8373B"/>
<path d="M97.7094 379.858C96.1894 366.976 102.675 351.393 108.821 340.655C111.534 335.915 116.927 333.531 122.34 334.254C206.951 345.548 184.35 372.745 159.282 386.81C157.202 387.978 154.842 388.527 152.457 388.527H109.377C103.789 388.527 98.3643 385.408 97.7094 379.858Z" fill="#80201E"/>
<circle cx="12.8071" cy="12.8071" r="12.8071" transform="matrix(-1 0 0 1 132.759 349.649)" fill="#A8373B"/>
<circle cx="11.4349" cy="11.4349" r="11.4349" transform="matrix(-1 0 0 1 165.691 354.223)" fill="#A8373B"/>
<path d="M465.233 415.514C465.233 432.692 451.308 446.616 434.13 446.616H150.544C133.366 446.616 119.441 432.692 119.441 415.514H465.233ZM150.544 422.832C153.289 429.236 159.234 434.725 164.723 434.725L413.547 434.267C420.115 434.267 427.269 430.151 429.556 422.832H150.544Z" fill="#292C33"/>
<g filter="url(#filter4_i_8223_36841)">
<rect x="255.745" y="458.509" width="73.1836" height="27.4438" fill="#D9D9D9"/>
</g>
<path d="M129.046 307.568L174.328 227.066C254.464 223.407 363.538 225.542 408.058 227.066L450.596 307.568C343.108 325.864 168.992 315.344 129.046 307.568Z" fill="#22B3E2"/>
<path opacity="0.36" d="M157.405 257.255L174.328 227.067C258.032 222.95 363.475 226.163 408.058 227.066L424.067 257.254C322.525 288.357 250.714 286.071 157.405 257.255Z" fill="white"/>
<path d="M620 374H861.5L965 562L644.5 567.5L620 374Z" fill="#98DB6F"/>
<path opacity="0.45" d="M767.832 385.746L668.556 480.051L695.553 479.698L768.107 406.745L854.54 477.622L882.537 477.256L767.832 385.746Z" fill="white"/>
<path opacity="0.45" d="M771.074 420.825L671.797 515.13L698.795 514.777L771.348 441.823L857.781 512.7L885.779 512.335L771.074 420.825Z" fill="white"/>
<g clip-path="url(#clip1_8223_36841)" filter="url(#filter5_d_8223_36841)">
<path d="M741.017 400.98V446.945" stroke="#9AB445" stroke-width="9.96278"/>
<path d="M738.612 575.349H743.408C748.839 575.349 753.243 570.945 753.243 565.514V493.485C753.243 488.053 748.839 483.65 743.408 483.65H738.612C733.18 483.65 728.777 488.053 728.777 493.485V565.514C728.777 570.945 733.18 575.349 738.612 575.349Z" fill="#62657A"/>
<path d="M847.961 327.149H810.143C807.113 327.149 804.657 329.606 804.657 332.636V336.127C804.657 339.158 807.113 341.614 810.143 341.614H847.961C850.991 341.614 853.448 339.158 853.448 336.127V332.636C853.448 329.606 850.991 327.149 847.961 327.149Z" fill="#171759"/>
<path d="M854.24 347.573C861.812 347.573 867.95 341.435 867.95 333.863C867.95 326.292 861.812 320.153 854.24 320.153C846.669 320.153 840.53 326.292 840.53 333.863C840.53 341.435 846.669 347.573 854.24 347.573Z" fill="#171759"/>
<g filter="url(#filter6_d_8223_36841)">
<path d="M709.836 427.187L723.701 395.464C725.617 391.083 723.617 385.978 719.236 384.063L719.224 384.058C714.842 382.143 709.738 384.142 707.823 388.524L693.957 420.246C692.042 424.628 694.041 429.732 698.423 431.647L698.434 431.652C702.816 433.568 707.921 431.568 709.836 427.187Z" fill="#171759"/>
<path d="M686.873 426.596L698.439 431.652C702.821 433.567 707.925 431.567 709.84 427.186L709.845 427.174C711.761 422.793 709.761 417.688 705.38 415.773L693.813 410.717C689.432 408.802 684.327 410.802 682.412 415.183L682.407 415.195C680.492 419.576 682.491 424.681 686.873 426.596Z" fill="#171759"/>
<path d="M787.613 420.242L773.747 388.52C771.832 384.138 766.728 382.139 762.346 384.054L762.334 384.059C757.953 385.974 755.953 391.079 757.868 395.461L771.734 427.183C773.649 431.564 778.754 433.564 783.136 431.649L783.147 431.644C787.529 429.728 789.528 424.624 787.613 420.242Z" fill="#171759"/>
<path d="M787.768 410.733L776.202 415.789C771.82 417.704 769.821 422.808 771.736 427.19L771.741 427.202C773.656 431.583 778.761 433.583 783.142 431.667L794.708 426.612C799.09 424.697 801.089 419.592 799.174 415.211L799.169 415.199C797.254 410.817 792.149 408.818 787.768 410.733Z" fill="#171759"/>
<path d="M741.015 399.434C785.739 399.434 821.996 363.177 821.996 318.452C821.996 273.728 785.739 237.471 741.015 237.471C696.29 237.471 660.033 273.728 660.033 318.452C660.033 363.177 696.29 399.434 741.015 399.434Z" fill="#62657A"/>
<path opacity="0.43" d="M741.014 362.46C765.319 362.46 785.022 342.757 785.022 318.452C785.022 294.147 765.319 274.445 741.014 274.445C716.71 274.445 697.007 294.147 697.007 318.452C697.007 342.757 716.71 362.46 741.014 362.46Z" stroke="#D3D3DD" stroke-width="6.3946" stroke-miterlimit="10"/>
<path opacity="0.43" d="M741.014 352.048C759.57 352.048 774.612 337.006 774.612 318.451C774.612 299.896 759.57 284.854 741.014 284.854C722.459 284.854 707.417 299.896 707.417 318.451C707.417 337.006 722.459 352.048 741.014 352.048Z" fill="#D3D3DD"/>
<path opacity="0.2" d="M660.033 318.451C660.033 363.175 696.291 399.433 741.015 399.433C763.869 399.433 784.498 389.968 799.218 374.737C786.71 382.64 771.901 387.219 756.016 387.219C711.293 387.219 675.048 350.961 675.048 306.238C675.048 284.368 683.706 264.519 697.813 249.952C675.112 264.289 660.033 289.612 660.033 318.451Z" fill="#3D3D60"/>
<path d="M667.747 320.869C668.975 357.689 697.354 387.628 733.509 391.299" stroke="#4E4E68" stroke-width="6.3946" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M678.862 325.677C681.817 351.064 699.964 371.808 723.97 378.586" stroke="#4E4E68" stroke-width="6.3946" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M814.299 316.034C813.071 279.214 784.692 249.275 748.537 245.604" stroke="#4E4E68" stroke-width="6.3946" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M803.185 311.225C800.231 285.839 782.083 265.094 758.077 258.316" stroke="#4E4E68" stroke-width="6.3946" stroke-miterlimit="10" stroke-linecap="round"/>
</g>
<path d="M725.235 414.166H756.786C762.916 414.166 767.887 409.196 767.887 403.065V403.052C767.887 396.921 762.916 391.951 756.786 391.951H725.235C719.104 391.951 714.134 396.921 714.134 403.052V403.065C714.134 409.196 719.104 414.166 725.235 414.166Z" fill="#FCD579"/>
<g filter="url(#filter7_d_8223_36841)">
<path d="M756.249 500.801H725.785V442.968C725.785 434.565 732.614 427.736 741.017 427.736C749.419 427.736 756.249 434.565 756.249 442.968V500.801Z" fill="#BBD567"/>
</g>
<path d="M662.903 314.846C685.271 318.197 711.463 320.652 740.738 320.665C770.255 320.678 796.639 318.21 819.136 314.846C819.609 314.846 822.116 314.795 824.136 312.889C825.415 311.674 826.221 310.012 826.221 308.17V297.427C826.221 293.757 823.036 290.751 819.136 290.751H662.903C659.015 290.751 655.818 293.757 655.818 297.427V308.17C655.818 311.841 659.002 314.846 662.903 314.846Z" fill="#312A4C"/>
<path d="M821.872 302.799C826.042 302.799 829.38 299.282 829.021 295.151C825.07 250.516 786.894 215.001 741.019 215.001C695.144 215.001 656.981 250.516 653.029 295.151C652.658 299.269 656.009 302.799 660.178 302.799H821.872Z" fill="#FF525F"/>
</g>
<rect x="536.182" y="-141" width="49" height="192.182" rx="6.36364" fill="#2B475F"/>
<g filter="url(#filter8_i_8223_36841)">
<rect x="525.364" y="-135.273" width="71.2727" height="180.727" rx="6.36364" fill="#536F96"/>
</g>
<path d="M596.636 12.6813V-11.1824H616.364C616.715 -11.1824 617 -10.8975 617 -10.546V-4.18237C617 3.13581 601.091 13.954 596.636 12.6813Z" fill="#1A3045"/>
<path d="M525.364 12.6813V-11.1824H505.636C505.285 -11.1824 505 -10.8975 505 -10.546V-4.18237C505 3.13581 520.909 13.954 525.364 12.6813Z" fill="#1A3045"/>
<circle cx="560.682" cy="8.86435" r="22.5909" fill="#19465B"/>
<g filter="url(#filter9_ii_8223_36841)">
<circle cx="560.681" cy="8.86357" r="20.0455" fill="#50AB34" fill-opacity="0.35"/>
</g>
<path d="M583.503 8.1899C583.678 8.7723 584.546 8.72262 584.546 8.11464C584.546 -5.35378 573.861 -16.2725 560.682 -16.2725C547.503 -16.2725 536.818 -5.35378 536.818 8.11464C536.818 8.72262 537.686 8.77229 537.861 8.1899C540.851 -1.7897 549.938 -9.04665 560.682 -9.04665C571.426 -9.04665 580.513 -1.7897 583.503 8.1899Z" fill="#273943"/>
<rect x="66.1824" y="-139" width="49" height="192.182" rx="6.36364" fill="#2B475F"/>
<g filter="url(#filter10_i_8223_36841)">
<rect x="55.3635" y="-133.273" width="71.2727" height="180.727" rx="6.36364" fill="#536F96"/>
</g>
<path d="M126.636 14.6813V-9.18237H146.364C146.715 -9.18237 147 -8.89746 147 -8.54601V-2.18237C147 5.13581 131.091 15.954 126.636 14.6813Z" fill="#1A3045"/>
<path d="M55.3635 14.6813V-9.18237H35.6363C35.2848 -9.18237 34.9999 -8.89746 34.9999 -8.54601V-2.18237C34.9999 5.13581 50.909 15.954 55.3635 14.6813Z" fill="#1A3045"/>
<circle cx="90.6822" cy="10.8643" r="22.5909" fill="#19465B"/>
<g filter="url(#filter11_ii_8223_36841)">
<circle cx="90.6814" cy="10.8636" r="20.0455" fill="#50AB34" fill-opacity="0.35"/>
</g>
<path d="M113.503 10.1899C113.678 10.7723 114.546 10.7226 114.546 10.1146C114.546 -3.35378 103.861 -14.2725 90.682 -14.2725C77.5027 -14.2725 66.8184 -3.35378 66.8184 10.1146C66.8184 10.7226 67.6861 10.7723 67.8606 10.1899C70.8512 0.210301 79.9376 -7.04665 90.682 -7.04665C101.426 -7.04665 110.513 0.210303 113.503 10.1899Z" fill="#273943"/>
<path d="M891.5 383.5L902.865 382.173L933.034 397.852L927.5 408.5L891.5 383.5Z" fill="#D1D1D1"/>
<g filter="url(#filter12_ii_8223_36841)">
<path d="M891 157H903V382C903 383.105 902.105 384 901 384H893C891.895 384 891 383.105 891 382V157Z" fill="#B7B7B7"/>
</g>
<rect x="872.182" y="-19" width="49" height="192.182" rx="6.36364" fill="#2B475F"/>
<g filter="url(#filter13_i_8223_36841)">
<rect x="861.364" y="-13.2729" width="71.2727" height="180.727" rx="6.36364" fill="#536F96"/>
</g>
<path d="M861.364 134.681V110.818H841.636C841.285 110.818 841 111.103 841 111.454V117.818C841 125.136 856.909 135.954 861.364 134.681Z" fill="#1A3045"/>
<path d="M861.364 81.8636V58H841.636C841.285 58 841 58.2849 841 58.6364V65C841 72.3182 856.909 83.1364 861.364 81.8636Z" fill="#1A3045"/>
<path d="M861.364 29.046V5.18237H841.636C841.285 5.18237 841 5.46728 841 5.81874V12.1824C841 19.5006 856.909 30.3187 861.364 29.046Z" fill="#1A3045"/>
<circle cx="896.682" cy="25.2287" r="22.5909" fill="#19465B"/>
<g filter="url(#filter14_ii_8223_36841)">
<circle cx="896.682" cy="25.228" r="20.0455" fill="#FF432F"/>
</g>
<path d="M919.503 24.5543C919.678 25.1367 920.546 25.087 920.546 24.479C920.546 11.0106 909.861 0.0919189 896.682 0.0919189C883.503 0.0919189 872.818 11.0106 872.818 24.479C872.818 25.087 873.686 25.1367 873.861 24.5543C876.851 14.5747 885.938 7.31773 896.682 7.31773C907.427 7.31773 916.513 14.5747 919.503 24.5543Z" fill="#273943"/>
<circle cx="896.682" cy="78.0449" r="22.5909" fill="#19465B"/>
<g filter="url(#filter15_ii_8223_36841)">
<circle cx="896.682" cy="78.0441" r="20.0455" fill="#FDC321" fill-opacity="0.35"/>
</g>
<path d="M919.503 77.3704C919.678 77.9528 920.546 77.9032 920.546 77.2952C920.546 63.8268 909.861 52.9081 896.682 52.9081C883.503 52.9081 872.818 63.8268 872.818 77.2952C872.818 77.9032 873.686 77.9528 873.861 77.3704C876.851 67.3908 885.938 60.1339 896.682 60.1339C907.427 60.1339 916.513 67.3908 919.503 77.3704Z" fill="#273943"/>
<circle cx="896.682" cy="130.864" r="22.5909" fill="#19465B"/>
<g filter="url(#filter16_ii_8223_36841)">
<circle cx="896.682" cy="130.864" r="20.0455" fill="#50AB34" fill-opacity="0.35"/>
</g>
<path d="M919.503 130.19C919.678 130.772 920.546 130.723 920.546 130.115C920.546 116.646 909.861 105.728 896.682 105.728C883.503 105.728 872.818 116.646 872.818 130.115C872.818 130.723 873.686 130.772 873.861 130.19C876.851 120.21 885.938 112.953 896.682 112.953C907.427 112.953 916.513 120.21 919.503 130.19Z" fill="#273943"/>
<path d="M865.818 59.5904V-1.81873C865.818 -5.33327 868.667 -8.18237 872.181 -8.18237H894.454" stroke="#8DA5C1" stroke-width="2.54545" stroke-linecap="round"/>
<g filter="url(#filter17_f_8223_36841)">
<circle cx="290" cy="281" r="28" fill="#BBD567"/>
</g>
<g filter="url(#filter18_f_8223_36841)">
<circle cx="852" cy="102" r="28" fill="#BBD567"/>
</g>
<g filter="url(#filter19_f_8223_36841)">
<circle cx="641" cy="417" r="28" fill="#BBD567"/>
</g>
<g filter="url(#filter20_d_8223_36841)">
<circle cx="292" cy="279" r="17.5" fill="#BBD567" stroke="white" stroke-width="5"/>
</g>
<g filter="url(#filter21_d_8223_36841)">
<circle cx="637" cy="417" r="17.5" fill="#BBD567" stroke="white" stroke-width="5"/>
</g>
<g filter="url(#filter22_d_8223_36841)">
<circle cx="848" cy="102" r="17.5" fill="#BBD567" stroke="white" stroke-width="5"/>
</g>
{CIRCLE_DATA.map(({ x, y, number }) => (
          <g
            className={styles.svg_circle}
            key={number}
            onClick={() => {
              handleCircleClick(number);
            }}
            aria-selected={inactiveCircles.includes(parseInt(number))}
            fill={activeCircles.includes(parseInt(number)) ? "##1C3A29" : "#BBD567"}
          >
            <circle cx={x} cy={y} r="15" />
            <text
              className={styles.svg_text}
              x={x}
              y={y}
              textAnchor="middle"
              fill="#fff"
              dominantBaseline="central"
            >
            </text>
          </g>
        ))}
</g>
<defs>
<filter id="filter0_i_8223_36841" x="84.6782" y="450.276" width="64.9504" height="103.372" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="14.1632" dy="-16.6626"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0594429 0 0 0 0 0.0594429 0 0 0 0 0.0636068 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8223_36841"/>
</filter>
<filter id="filter1_i_8223_36841" x="433.215" y="450.276" width="64.9504" height="103.372" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="14.1632" dy="-16.6626"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0594429 0 0 0 0 0.0594429 0 0 0 0 0.0636068 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8223_36841"/>
</filter>
<filter id="filter2_i_8223_36841" x="201.772" y="458.509" width="180.236" height="36.1343" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-13.3301"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.192157 0 0 0 0 0.219608 0 0 0 0 0.25098 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8223_36841"/>
</filter>
<filter id="filter3_d_8223_36841" x="44.1061" y="342.068" width="494.753" height="156.253" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.33253"/>
<feGaussianBlur stdDeviation="16.6626"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8223_36841"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8223_36841" result="shape"/>
</filter>
<filter id="filter4_i_8223_36841" x="255.745" y="458.509" width="73.1836" height="27.4438" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-9.16445"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8223_36841"/>
</filter>
<filter id="filter5_d_8223_36841" x="650.395" y="215" width="220.159" height="365.546" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.60528"/>
<feGaussianBlur stdDeviation="1.30264"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8223_36841"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8223_36841" result="shape"/>
</filter>
<filter id="filter6_d_8223_36841" x="656.233" y="237.471" width="169.562" height="202.723" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="1.9"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8223_36841"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8223_36841" result="shape"/>
</filter>
<filter id="filter7_d_8223_36841" x="721.785" y="427.736" width="38.4639" height="81.0647" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8223_36841"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8223_36841" result="shape"/>
</filter>
<filter id="filter8_i_8223_36841" x="525.364" y="-135.273" width="71.2727" height="180.727" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-6.36364" dy="-6.36364"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8223_36841"/>
</filter>
<filter id="filter9_ii_8223_36841" x="540.636" y="-11.1819" width="40.0908" height="40.0909" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-2.54545" dy="-3.81818"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8223_36841"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.09091"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_8223_36841" result="effect2_innerShadow_8223_36841"/>
</filter>
<filter id="filter10_i_8223_36841" x="55.3635" y="-133.273" width="71.2727" height="180.727" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-6.36364" dy="-6.36364"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8223_36841"/>
</filter>
<filter id="filter11_ii_8223_36841" x="70.636" y="-9.18188" width="40.0908" height="40.0909" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-2.54545" dy="-3.81818"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8223_36841"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.09091"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_8223_36841" result="effect2_innerShadow_8223_36841"/>
</filter>
<filter id="filter12_ii_8223_36841" x="891" y="157" width="12" height="227" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="27"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8223_36841"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-4"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_8223_36841" result="effect2_innerShadow_8223_36841"/>
</filter>
<filter id="filter13_i_8223_36841" x="861.364" y="-13.2729" width="71.2727" height="180.727" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-6.36364" dy="-6.36364"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8223_36841"/>
</filter>
<filter id="filter14_ii_8223_36841" x="876.636" y="5.1825" width="40.0909" height="40.0909" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-2.54545" dy="-3.81818"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8223_36841"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.09091"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_8223_36841" result="effect2_innerShadow_8223_36841"/>
</filter>
<filter id="filter15_ii_8223_36841" x="876.636" y="57.9987" width="40.0909" height="40.0909" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-2.54545" dy="-3.81818"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8223_36841"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.09091"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_8223_36841" result="effect2_innerShadow_8223_36841"/>
</filter>
<filter id="filter16_ii_8223_36841" x="876.636" y="110.818" width="40.0909" height="40.0908" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-2.54545" dy="-3.81818"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8223_36841"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.09091"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_8223_36841" result="effect2_innerShadow_8223_36841"/>
</filter>
<filter id="filter17_f_8223_36841" x="231.9" y="222.9" width="116.2" height="116.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="15.05" result="effect1_foregroundBlur_8223_36841"/>
</filter>
<filter id="filter18_f_8223_36841" x="793.9" y="43.9" width="116.2" height="116.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="15.05" result="effect1_foregroundBlur_8223_36841"/>
</filter>
<filter id="filter19_f_8223_36841" x="582.9" y="358.9" width="116.2" height="116.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="15.05" result="effect1_foregroundBlur_8223_36841"/>
</filter>
<filter id="filter20_d_8223_36841" x="272" y="259" width="40" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8223_36841"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8223_36841" result="shape"/>
</filter>
<filter id="filter21_d_8223_36841" x="617" y="397" width="40" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8223_36841"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8223_36841" result="shape"/>
</filter>
<filter id="filter22_d_8223_36841" x="828" y="82" width="40" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8223_36841"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8223_36841" result="shape"/>
</filter>
<clipPath id="clip0_8223_36841">
<rect width="924" height="490" rx="8" fill="white"/>
</clipPath>
<clipPath id="clip1_8223_36841">
<rect width="214.948" height="360.336" fill="white" transform="translate(653 215)"/>
</clipPath>
</defs>
</svg>
  );
}

