import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
const CustomarsReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://hidden-fjord-28330.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <div className="container mt-5 my-5">
      <h2 className="my-3 mx-auto">Customers Reviews</h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {reviews.map((review) => (
          <Grid key={review._id} Container item xs={12} sm={4} md={4}>
            <Card
              style={{ backgroundColor: "aliceblue" }}
              sx={{ minWidth: 275, border: 1, boxShadow: 0 }}
            >
              <CardMedia />
              <CardContent>
                <Typography variant="h5" component="div">
                  Name: {review.name}
                </Typography>
                <Typography
                  sx={{ mt: 3 }}
                  variant="body2"
                  color="text.secondary"
                >
                  Customers feedback: {review.comments}
                </Typography>
                <Rating
                  sx={{ mt: 3 }}
                  name="simple-controlled"
                  defaultValue={0}
                  value={review.number}
                  precision={0.5}
                  readOnly
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CustomarsReview;
