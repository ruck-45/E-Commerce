import * as React from "react";
import { getCookie } from "../../../utils/cookies";
import toast from "react-hot-toast";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Button, Chip, IconButton, Input, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/system";

import "./product.css";

const StyledTextField = styled(TextField)(({ theme, error }) => ({
  "& .MuiOutlinedInput-root": {
    borderColor: error ? "red" : theme.palette.divider,
  },
}));

type Product = {
  brand: String;
  title: String;
  color: String;
  discountedPrice: Number;
  price: Number;
  discountPercent: Number;
  highlights: [];
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

  const [isError, setIsError] = React.useState({
    brand: { isError: false },
    title: { isError: false },
    color: { isError: false },
    discountedPrice: { isError: false },
    price: { isError: false },
    discountPercent: { isError: false },
    highlights: { isError: false },
    details: { isError: false },
    quantity: { isError: false },
    material: { isError: false },
    dimension: { isError: false },
    description: { isError: false },
    topLevelCategory: { isError: false },
    secondLevelCategory: { isError: false },
    thirdLevelCategory: { isError: false },
    orders: { isError: false },
    registerCounter: { isError: false },
    imageCount: { isError: false },
    imageArray: { isError: false },
  });

  const [highlights, setHighlights] = React.useState<any>("");

  const [images, setImages] = React.useState<any>([]);

  const token = getCookie("token");

  const [product, setProduct] = React.useState<Product>({
    brand: "",
    title: "",
    color: "",
    discountedPrice: 0,
    price: 0,
    discountPercent: 0,
    highlights: [],
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
    const percentage: Number =
      100 -
      ((+product.price - +product.discountedPrice) / +product.price) * 100;

    setProduct({ ...product, imageCount: images.length });
    setProduct({ ...product, discountPercent: +percentage.toFixed(2) });
    
    if(validateProduct()){
      toast.error('please insert data in required field');
    }
    else{
      toast.success('api calling..... ');
    }
  };


  const validateProduct=()=>{
    let status=true;
    status= product.brand.length === 0
      ? (isError.brand.isError = true)
      : false;
    status=product.title.length === 0
      ? (isError.title.isError = true)
      : false;
    status=product.color.length === 0
      ? (isError.color.isError = true)
      : false;
    status=product.description.length === 0
      ? (isError.description.isError = true)
      : false;
    status=product.details.length === 0
      ? (isError.details.isError = true)
      : false;
    status=product.quantity === 0
      ? (isError.quantity.isError = true)
      : false;
    status=product.orders === 0
      ? (isError.orders.isError = true)
      : false;
    status=product.price === 0
      ? (isError.price.isError = true)
      : false;
    status=product.topLevelCategory.length === 0
      ? (isError.topLevelCategory.isError = true)
      : false;
    status=product.secondLevelCategory.length === 0
      ? (isError.secondLevelCategory.isError = true)
      : false;
    status=product.thirdLevelCategory.length === 0
      ? (isError.thirdLevelCategory.isError = true)
      : false;
    
    status=product.discountedPrice === 0
      ? (isError.discountedPrice.isError = true)
      : false;
    
    return status;
  }
  const addHighlight = () => {
    if (highlights.length > 0) {
      let temp: any = [...product.highlights];
      temp.push(highlights);
      setProduct({ ...product, highlights: temp });
      setHighlights("");
    }
  };

  function handleUserInput(e: any) {
    console.log(e.target.value);
    const { name, value } = e.target;
    let temp = { ...isError };
    // temp[name].isError = false
    setIsError({ ...isError, [name]: { ...name, isError: false } });
    setProduct({
      ...product,
      [name]: value,
    });
  }

  function chipDelete(index: any): void {
    console.log(index);
    let temp: any = [...product.highlights];
    console.log(temp);
    temp = temp.filter((item: any, i: any) => i !== index);
    setProduct({ ...product, highlights: temp });
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
                  <StyledTextField
                    fullWidth
                    onChange={handleUserInput}
                    value={product.title}
                    id="outlined-basic"
                    name="title"
                    label="Title"
                    variant="outlined"
                    error={isError.title.isError}
                  />
                  {isError.title.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    onChange={handleUserInput}
                    value={product.brand}
                    id="outlined-basic"
                    name="brand"
                    label="Brand"
                    variant="outlined"
                    error={isError.brand.isError}
                  />
                  {isError.brand.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    onChange={handleUserInput}
                    value={product.color}
                    id="outlined-basic"
                    name="color"
                    label="color"
                    variant="outlined"
                    error={isError.color.isError}
                  />
                  {isError.color.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={6}>
                  <StyledTextField
                    fullWidth
                    id="outlined-basic"
                    label="Minimum Quantity"
                    name="quantity"
                    variant="outlined"
                    type="number"
                    onChange={handleUserInput}
                    error={isError.quantity.isError}
                  />
                  {isError.quantity.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={6}>
                  <StyledTextField
                    fullWidth
                    id="outlined-basic"
                    label="Orders"
                    name="orders"
                    variant="outlined"
                    type="number"
                    onChange={handleUserInput}
                    error={isError.orders.isError}
                  />
                  {isError.orders.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={6}>
                  <StyledTextField
                    fullWidth
                    id="outlined-basic"
                    label="Price"
                    name="price"
                    variant="outlined"
                    type="number"
                    onChange={handleUserInput}
                    error={isError.price.isError}
                  />
                  {isError.price.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={6}>
                  <StyledTextField
                    fullWidth
                    id="outlined-basic"
                    label="Discounted Price"
                    name="discountedPrice"
                    variant="outlined"
                    type="number"
                    onChange={handleUserInput}
                    error={isError.discountedPrice.isError}
                  />
                  {isError.discountedPrice.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={12}>
                  <textarea
                    rows={4}
                    cols={50}
                    className="cp-textarea"
                    placeholder="HighLights"
                    value={highlights}
                    onChange={(e) => {
                      setHighlights(e.target.value);
                    }}
                  ></textarea>
                  <Button
                    style={{ margin: "10px" }}
                    onClick={addHighlight}
                    variant="contained"
                  >
                    Add Hightlight
                  </Button>
                  <div>
                    {product.highlights.length > 0 &&
                      product.highlights.map((item: any, index: number) => (
                        <Chip
                          key={index}
                          onDelete={() => chipDelete(index)}
                          label={item}
                        />
                      ))}
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    id="outlined-basic"
                    name="details"
                    label="Details"
                    variant="outlined"
                    error={isError.details.isError}
                    onChange={handleUserInput}
                  />
                  {isError.details.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    id="outlined-basic"
                    name="topLevelCategory"
                    label="Top Level Category"
                    variant="outlined"
                    error={isError.topLevelCategory.isError}
                    onChange={handleUserInput}
                  />
                  {isError.topLevelCategory.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    id="outlined-basic"
                    name="secondLevelCategory"
                    label="Second Level Category"
                    variant="outlined"
                    error={isError.secondLevelCategory.isError}
                    onChange={handleUserInput}
                  />
                  {isError.secondLevelCategory.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    id="outlined-basic"
                    name="thirdLevelCategory"
                    label="Third Level Category"
                    variant="outlined"
                    error={isError.thirdLevelCategory.isError}
                    onChange={handleUserInput}
                  />
                  {isError.thirdLevelCategory.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
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
                            onChange={(e) => setimages([...images,e.target.files && URL.createObjectURL(e.target.files[0])])}
                            multiple
                        /> */}
            {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                            {images.map((item:any) => (
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
                    setImages([...images, ...tempArr]);
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
                {images.length > 0 ? (
                  images.map((item: any, i: any) => (
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
                              setImages(
                                images.filter((img: any) => img !== item)
                              );
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      </div>
                    </ImageListItem>
                  ))
                ) : (
                  <div>No image selected</div>
                )}
              </ImageList>
            </div>
          </div>
          <Button
            style={{ marginTop: "30px" }}
            onClick={addProduct}
            variant="contained"
          >
            Add Product
          </Button>
        </div>
      </div>
    </>
  );
}
