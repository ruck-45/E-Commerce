import * as React from "react";
import { getCookie } from "../../../utils/cookies";
import axios from "axios";
import toast from "react-hot-toast";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Button, IconButton, Input } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import "./product.css";

type Product = {
  brand: String;
  title: String;
  color: String;
  discountedPrice: Number;
  price: Number;
  discountPercent: Number;
  highlights: String;
  details: String;
  quantity: Number;
  material: String;
  dimension: String;
  description: String;
  topLevelCategory: String;
  secondLevelCategory: String;
  thirdLevelCategory: String;
  orders: Number;
  registerCounter: Number;
  imageCount: Number;
  imageArray: [];
};

export default function AddProduct() {
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  const [itemData, setItemData] = React.useState<any>([]);

  const token = getCookie("token");

  const [product, setProduct] = React.useState<Product>({
    brand: "",
    title: "",
    color: "",
    discountedPrice: 0,
    price: 0,
    discountPercent: 0,
    highlights: "",
    details: "",
    quantity: 0,
    material: "",
    dimension: "",
    description: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
    orders: 0,
    registerCounter: 0,
    imageCount: 0,
    imageArray: [],
  });

  const addProduct = async () => {
    const discountedPrice: Number =
      ((+product.price - +product.discountedPrice) / +product.price) * 100;
      setProduct({ ...product, imageCount: product.imageArray.length });
    if (
      product.brand === "" ||
      product.title === "" ||
      product.color === "" ||
      product.discountedPrice === 0 ||
      product.price === 0 ||
      product.discountPercent === 0 ||
      product.highlights === "" ||
      product.details === "" ||
      product.quantity === 0 ||
      product.material === "" ||
      product.dimension === "" ||
      product.description === "" ||
      product.topLevelCategory === "" ||
      product.secondLevelCategory === "" ||
      product.thirdLevelCategory === "" ||
      product.orders === 0 ||
      product.registerCounter === 0 ||
      product.imageArray.length === 0
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    // console.log(product);
    // try {
    //   const response = await axios.post(`${apiUrl}/careers/createjob`, product, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });

    //   if (!response.data.success) {
    //     return toast.error("Product Creation Failed");
    //   }

    //   toast.success("Product Creation Successful");
    //   setProduct({
    //     brand:'',
    //     title:'',
    //     color:'',
    //     discountedPrice:0,
    //     price:0,
    //     discountPercent:0,
    //     highlights:'',
    //     details:'',
    //     quantity:0,
    //     material:'',
    //     dimension:'',
    //     description:'',
    //     topLevelCategory:'',
    //     secondLevelCategory:'',
    //     thirdLevelCategory:'',
    //     orders:0,
    //     registerCounter:0,
    //     imageCount:0,
    //     imageArray:[]
    //   });
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Product Creation Failed");
    // }
    console.log(product);
  };

  function handleUserInput(e: any) {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  }

  return (
    <>
      <div className="cp-wrapper">
        <div className="cp-container">
          <h3 className="cp-title">Create Product</h3>
          <div className="cp-form-wrapper">
            <div className="cp-form">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    onChange={handleUserInput}
                    value={product.title}
                    id="outlined-basic"
                    name="title"
                    label="Title"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    onChange={handleUserInput}
                    value={product.color}
                    id="outlined-basic"
                    name="title"
                    label="color"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Quantity"
                    name="quantity"
                    variant="outlined"
                    type="number"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Orders"
                    name="title"
                    variant="outlined"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    name="title"
                    label="Higlights"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    name="title"
                    label="Details"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    name="title"
                    label="Top Level Category"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    name="title"
                    label="Second Level Category"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    name="title"
                    label="Third Level Category"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <textarea
                    rows={4}
                    cols={50}
                    className="cp-textarea"
                    placeholder="Desciption"
                  ></textarea>
                </Grid>
              </Grid>
            </div>
            {/* <div className='cp-img-upload'>
                        <input
                            type="file"
                            id="myFile"
                            name="profilepic"
                            accept=".jpg,.jpeg"
                            onChange={(e) => setItemData([...itemData,e.target.files && URL.createObjectURL(e.target.files[0])])}
                            multiple
                        /> */}
            {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                            {itemData.map((item:any) => (
                                <ImageListItem key={Math.random()*10}>
                                <img
                                    style={{margin:'10px'}}
                                    src={item}
                                    alt='image'
                                    loading="lazy"
                                />
                                </ImageListItem>
                            ))}
                        </ImageList> */}
            <div className="cp-img-upload">
              <input
                type="file"
                hidden
                id="actual-btn"
                accept=".jpg,.jpeg"
                onChange={(e) => {
                  let tempArr = [];
                  if (e.target.files) {
                    for (let i = 0; i < e.target.files.length; i++) {
                      tempArr.push(URL.createObjectURL(e.target.files[i]));
                    }
                    setItemData([...itemData, ...tempArr]);
                  }
                }}
                multiple
              />
              <label htmlFor="actual-btn">Select Images</label>
              <ImageList
                sx={{ width: 500, height: 450 }}
                cols={3}
                rowHeight={164}
                className="cp-img-list"
              >
                { itemData.length>0 ? itemData.map((item: any, i: any) => (
                  <ImageListItem key={i}>
                    <div className="img-content-wrapper">
                      <img
                        style={{
                          margin: "10px",
                        }}
                        src={item}
                        alt="image"
                        loading="lazy"
                      />
                      <div className="cp-icon">
                      <IconButton
                          aria-label="delete"
                          onClick={() => {
                            setItemData(
                              itemData.filter((img: any) => img !== item)
                            );
                          }}
                        ><DeleteIcon/></IconButton>
                      </div>
                    </div>
                  </ImageListItem>
                )) : <div>No image selected</div>  }
              </ImageList>
            </div>
          </div>
          <Button style={{marginTop:'30px'}} onClick={addProduct} variant="contained">
            Add Product
          </Button>
        </div>
      </div>
    </>
  );
}
