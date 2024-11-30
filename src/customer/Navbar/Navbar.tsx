// import Box from "@mui/material/Box";
// import React from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Button, IconButton, useMediaQuery } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import StorefrontIcon from "@mui/icons-material/Storefront";
// import { useTheme } from "@mui/material";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// const Navbar = () => {
//   const theme = useTheme();
//   const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

//   return (
//     <div>
//       <Box>
//         <div className="flex items-center justify-between px-5 lg:px20 h-[70px] border-b">
//           <div className="flex items-center gap-9">
//             <div className="flex items-center gap-2">
//               <IconButton>
//                 <MenuIcon />
//               </IconButton>
//               <h1 className="logo cursor-pointer text-lg md:text-2xl text-[#009276c]">
//                 Kishi
//               </h1>
//             </div>
//             <ul className="flex items-center font-medium ">
//               {["Men", "Women", "Home & Furniture", "Electronics"].map(
//                 (item) => (
//                   <li
//                     className="maincategory hover:text-secondary-color 
//             hover:border-b-2 h-[70px] px-4 border-secondary-color flex items-center"
//                   >
//                     {item}
//                   </li>
//                 )
//               )}
//             </ul>
//             <div>
//               <IconButton>
//                 <SearchIcon />
//               </IconButton>
//               {true ? (
//                 <Button>
//                   <AccountCircleIcon />
//                   <h1 className="font-semibold hidden lg:block">Kishi</h1>
//                 </Button>
//               ) : (
//                 <Button variant="contained">Login</Button>
//               )}
//               <IconButton>
//                 <FavoriteBorderIcon />
//               </IconButton>
//               <IconButton>
//                 <AddShoppingCartIcon />
//               </IconButton>
//               {isLarge && (
//                 <Button startIcon={<StorefrontIcon />} variant="outlined">
//                   Become Seller
//                 </Button>
//               )}
//             </div>
//           </div>
//         </div>
//       </Box>
//     </div>
//   );
// };

// export default Navbar;



import Box from "@mui/material/Box";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useTheme } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div>
      <Box>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          {/* Left Section */}
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              <IconButton>
                <MenuIcon />
              </IconButton>
              <h1 className="logo cursor-pointer text-lg md:text-2xl text-[#000000]">
                Kishi
              </h1>
            </div>
            <ul className="flex items-center font-medium">
              {["Men", "Women", "Home & Furniture", "Electronics"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="maincategory hover:text-secondary-color 
                    hover:border-b-2 h-[70px] px-4 border-secondary-color flex items-center"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <IconButton>
              <SearchIcon />
            </IconButton>
            {true ? (
              <Button>
                <AccountCircleIcon />
                <h1 className="font-semibold hidden lg:block">Kishi</h1>
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartIcon />
            </IconButton>
            {isLarge && (
              <Button startIcon={<StorefrontIcon />} variant="outlined">
                Become Seller
              </Button>
            )}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Navbar;

