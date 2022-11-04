import React from "react";

const Star = ({ variant = "filled" }: { variant?: "filled" | "stroke" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {variant === "filled" ? (
        <path
          d="M14.95 6.0875C14.8874 5.89061 14.7668 5.71723 14.604 5.59009C14.4412 5.46294 14.2437 5.38797 14.0375 5.375L10.325 5.11875L8.95002 1.65C8.87494 1.459 8.74426 1.29494 8.57488 1.17905C8.40551 1.06317 8.20525 1.00079 8.00002 1V1C7.7948 1.00079 7.59454 1.06317 7.42516 1.17905C7.25579 1.29494 7.1251 1.459 7.05002 1.65L5.65002 5.1375L1.96252 5.375C1.75659 5.38881 1.55954 5.4641 1.39686 5.59112C1.23418 5.71814 1.11336 5.89106 1.05002 6.0875C0.984985 6.28695 0.981185 6.50131 1.03911 6.70294C1.09704 6.90458 1.21404 7.08423 1.37502 7.21875L4.21252 9.61875L3.36877 12.9375C3.3104 13.162 3.3209 13.3989 3.39892 13.6174C3.47695 13.8358 3.61888 14.0258 3.80627 14.1625C3.98817 14.2931 4.20488 14.3664 4.42867 14.373C4.65247 14.3797 4.87316 14.3195 5.06252 14.2L7.99377 12.3438H8.00627L11.1625 14.3375C11.3244 14.4427 11.5132 14.4991 11.7063 14.5C11.8639 14.4988 12.0192 14.4614 12.1602 14.3908C12.3011 14.3201 12.424 14.2181 12.5194 14.0926C12.6147 13.967 12.68 13.8213 12.7103 13.6666C12.7405 13.5118 12.7349 13.3522 12.6938 13.2L11.8 9.56875L14.625 7.21875C14.786 7.08423 14.903 6.90458 14.9609 6.70294C15.0189 6.50131 15.0151 6.28695 14.95 6.0875Z"
          fill="black"
          fillOpacity="0.5"
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.41554 1.18039C7.58681 1.06044 7.79085 0.996094 7.99995 0.996094C8.20905 0.996094 8.41309 1.06044 8.58436 1.18039C8.75331 1.29871 8.88231 1.46549 8.95439 1.65861L10.3272 5.11548C10.3286 5.11902 10.3299 5.12258 10.3313 5.12616C10.3325 5.12958 10.3348 5.13255 10.3377 5.13471C10.3406 5.13688 10.3441 5.13815 10.3477 5.13836L10.3508 5.13855L14.0386 5.37607C14.9958 5.43822 15.3227 6.63646 14.626 7.21559C14.6259 7.21569 14.6258 7.2158 14.6257 7.21591L11.8015 9.57149L11.7998 9.57285C11.7935 9.5781 11.7887 9.58504 11.7861 9.59287C11.7836 9.60049 11.7833 9.60865 11.7851 9.61646C11.7851 9.61667 11.7852 9.61689 11.7852 9.6171L12.6971 13.2022C12.9179 14.0737 11.9768 14.858 11.1582 14.3417L11.1569 14.3409L8.00695 12.3409L8.27482 11.919L8.00666 12.3407C8.00466 12.3394 8.00233 12.3387 7.99995 12.3387C7.99758 12.3387 7.99525 12.3394 7.99325 12.3407L5.06214 14.1968C5.06196 14.197 5.06178 14.1971 5.06159 14.1972C4.16358 14.768 3.12643 13.9 3.37168 12.9391C3.37171 12.939 3.37174 12.9388 3.37177 12.9387L4.21467 9.6171C4.21472 9.61691 4.21476 9.61672 4.21481 9.61653C4.21664 9.6087 4.21628 9.60052 4.21376 9.59287C4.21118 9.58504 4.20644 9.5781 4.20009 9.57285L4.19844 9.57149L1.37425 7.21591C1.37412 7.2158 1.37398 7.21569 1.37385 7.21558C0.677204 6.63644 1.00408 5.43822 1.9613 5.37607L5.64907 5.13855L5.65216 5.13836C5.6558 5.13815 5.65929 5.13688 5.66222 5.13471C5.66515 5.13255 5.66738 5.12958 5.66865 5.12616C5.66998 5.12258 5.67134 5.11902 5.67275 5.11548L7.04551 1.65861C7.11759 1.46549 7.24659 1.29871 7.41554 1.18039ZM8.54296 11.4967C8.54305 11.4967 8.54315 11.4968 8.54324 11.4968L11.6917 13.4959C11.6918 13.4959 11.692 13.496 11.6921 13.4961C11.6978 13.4997 11.7011 13.5008 11.7021 13.5011C11.7035 13.5008 11.7078 13.4997 11.7137 13.4952C11.7213 13.4894 11.7261 13.4823 11.7283 13.4764C11.7293 13.4738 11.73 13.4709 11.7302 13.4674C11.7304 13.464 11.7303 13.4577 11.7278 13.4478L10.8154 9.86077L10.8147 9.85793C10.7673 9.66705 10.7748 9.46667 10.8364 9.27989C10.8978 9.0935 11.0105 8.92822 11.1616 8.803C11.1619 8.80272 11.1623 8.80245 11.1626 8.80218L13.9868 6.44662C13.9926 6.44176 13.9951 6.43828 13.9961 6.43661C13.9973 6.43477 13.9983 6.43262 13.9991 6.42966C14.0008 6.42292 14.0015 6.41129 13.9973 6.39786C13.9932 6.38446 13.987 6.37795 13.9852 6.37642C13.9846 6.37588 13.9844 6.37582 13.9841 6.37573C13.9841 6.3757 13.9812 6.37446 13.9739 6.37397C13.9739 6.37397 13.9739 6.37397 13.9738 6.37396L10.2897 6.13667C10.2891 6.13664 10.2885 6.1366 10.2879 6.13657C10.0909 6.12476 9.90163 6.05602 9.74298 5.93866C9.58565 5.82228 9.46521 5.66308 9.396 5.48013L8.02275 2.02205C8.02096 2.01754 8.01923 2.013 8.01757 2.00843C8.01626 2.00482 8.01386 2.00169 8.01071 1.99949C8.00756 1.99728 8.0038 1.99609 7.99995 1.99609C7.9961 1.99609 7.99235 1.99728 7.9892 1.99949C7.98604 2.00169 7.98365 2.00482 7.98233 2.00843C7.98067 2.013 7.97894 2.01754 7.97715 2.02205L6.60391 5.48013C6.5347 5.66308 6.41425 5.82228 6.25692 5.93866C6.09828 6.05601 5.90898 6.12476 5.71203 6.13657L2.0261 6.37396C2.02605 6.37397 2.02599 6.37397 2.02594 6.37397C2.01877 6.37446 2.0159 6.37566 2.01576 6.37572C2.01555 6.37581 2.01531 6.37591 2.01471 6.37642C2.01289 6.37795 2.00674 6.38446 2.0026 6.39786C1.99844 6.41129 1.99906 6.42292 2.00084 6.42966C2.00162 6.43263 2.00261 6.43477 2.00377 6.43661C2.00483 6.43828 2.0073 6.44176 2.01315 6.44662L2.01396 6.44729L4.83732 8.80218C4.83765 8.80245 4.83798 8.80272 4.8383 8.803C4.98938 8.92822 5.10209 9.0935 5.16351 9.27989C5.22507 9.46667 5.2326 9.66705 5.18524 9.85793L5.18459 9.8605L4.34063 13.1863C4.32257 13.257 4.34749 13.3118 4.39316 13.3465C4.41653 13.3643 4.44014 13.3719 4.4588 13.3732C4.47423 13.3743 4.4956 13.3721 4.52526 13.3532L4.5262 13.3526L7.45666 11.4968C7.45691 11.4967 7.45717 11.4965 7.45742 11.4964C7.45743 11.4964 7.45741 11.4964 7.45742 11.4964C7.61964 11.3934 7.80782 11.3387 7.99995 11.3387C8.19228 11.3387 8.38063 11.3935 8.54296 11.4967Z"
          fill="black"
          fillOpacity="0.5"
        />
      )}
    </svg>
  );
};

export default Star;
