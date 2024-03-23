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

const initialProduct: any = {
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
};

type Product = {
  brand: String;
  title: String;
  color: String;
  discountedPrice: Number;
  price: Number;
  discountPercent: Number;
  highlights: [];
  details: string;
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

  const [product, setProduct] = React.useState<Product>(initialProduct);

  const addProduct = async () => {
    const percentage: Number =
      100 -
      ((+product.price - +product.discountedPrice) / +product.price) * 100;
    setProduct({
      ...product,
      imageArray: images,
      imageCount: images.length,
      discountPercent: +percentage.toFixed(2),
    });
    console.log(product);

    if (images.length === 0) {
      toast.error("please insert atleast one image");
      return;
    }

    if (validateProduct()) {
      toast.error("please insert data in required field");
    } else {
      if (product.price <= product.discountedPrice) {
        toast.error("Price must be greater than discount price");
        return;
      }
      toast.success("Adding product ...");
      setImages([]);
      setProduct(initialProduct);
      setHighlights('');
    }
  };

  const validateProduct = () => {
    let status: boolean = false;

    const requiredFields: (keyof Product)[] = [
      "brand",
      "title",
      "color",
      "highlights",
      "details",
      "material",
      "dimension",
      "topLevelCategory",
      "secondLevelCategory",
      "thirdLevelCategory",
    ];

    const numberRequiredFields: (keyof Product)[] = [
      "price",
      "discountedPrice",
      "quantity",
      "orders",
    ];

    numberRequiredFields.forEach((field: keyof Product) => {
      const fieldValue = product[field];
    
      if (typeof fieldValue === 'number' && fieldValue === 0) {
        setIsError((prevError: any) => ({
          ...prevError,
          [field]: { isError: true },
        }));
        status = true;
      }
    });

    requiredFields.forEach((field: keyof Product) => {
      const fieldValue = product[field];
    
      if (typeof fieldValue === 'string' && fieldValue.trim().length === 0) {
        setIsError((prevError: any) => ({
          ...prevError,
          [field]: { isError: true },
        }));
        status = true;
      }
    });

    if (product.description.length < 20 || product.description.length >= 100) {
      setIsError((prevError) => ({
        ...prevError,
        description: { isError: true }
      }));
      status=true;
    }

    if (product.description.length < 20 || product.description.length >= 100) {
      setIsError((prevError) => ({
        ...prevError,
        description: { isError: true }
      }));
      status=true;
    }

    return status;
  };

  const addHighlight = () => {
    if (highlights.length > 0) {
      let temp: any = [...product.highlights];
      temp.push(highlights);
      setProduct({ ...product, highlights: temp });
      setHighlights("");
    }
  };

  function handleUserInput(e: any) {
    const { name, value } = e.target;
    setIsError({ ...isError, [name]: { ...name, isError: false } });
    setProduct({
      ...product,
      [name]: value,
    });
  }

  function chipDelete(index: any): void {
    let temp: any = [...product.highlights];
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
                    value={product.quantity}
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
                    value={product.orders}
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
                    value={product.price}
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
                    value={product.discountedPrice}
                    error={isError.discountedPrice.isError}
                  />
                  {isError.discountedPrice.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={6}>
                  <StyledTextField
                    fullWidth
                    id="outlined-basic"
                    label="Material"
                    name="material"
                    variant="outlined"
                    onChange={handleUserInput}
                    value={product.material}
                    error={isError.material.isError}
                  />
                  {isError.material.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={6}>
                  <StyledTextField
                    fullWidth
                    id="outlined-basic"
                    label="Dimension"
                    name="dimension"
                    variant="outlined"
                    onChange={handleUserInput}
                    value={product.dimension}
                    error={isError.dimension.isError}
                  />
                  {isError.dimension.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={12}>
                  <textarea
                    rows={4}
                    cols={50}
                    placeholder="HighLights"
                    value={highlights}
                    onChange={(e) => {
                      setIsError({ ...isError, [highlights]: { ...highlights, isError: false } });
                      setHighlights(e.target.value);
                    }}
                    className={isError.highlights.isError ? 'cp-textarea-error' : 'cp-textarea'}
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
                  {isError.highlights.isError ? (
                    <span className="cp-errors">* Required</span>
                  ) : (
                    ""
                  )}
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
                    value={product.details}
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
                    value={product.topLevelCategory}
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
                    value={product.secondLevelCategory}
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
                    value={product.thirdLevelCategory}
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
                    required
                    rows={4}
                    cols={50}
                    onChange={handleUserInput}
                    className={isError.description.isError ? 'cp-textarea-error' : 'cp-textarea'}
                    placeholder="Desciption"
                    name="description"
                    value={product.description.toString()} 
                    minLength={20}
                    maxLength={300}
                  ></textarea>
                  {isError.description.isError? (
                    <span className="cp-errors">* Description should be between 20 to 100 words</span>
                  ) : (
                    ""
                  )}
                </Grid>
              </Grid>
            </div>
            
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
