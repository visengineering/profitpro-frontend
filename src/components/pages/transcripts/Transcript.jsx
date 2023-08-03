import { Box, CardContent, Typography } from "@mui/material";
import React from "react";
import Card from "../../generic-components/card";

function Transcript() {
  return (
    <Box className="box-container">
      <Typography sx={{ margin: "1rem" }} variant="h4">
        Transcript Details
      </Typography>
      <Card>
        <CardContent>
          <Typography color="text.secondary">Created At: 2020-01-05</Typography>
          <Typography color="text.secondary">Updated At: 2020-01-08</Typography>
          <Typography color="text.secondary">Customer ID: 11091700</Typography>
          <Typography color="text.secondary">
            Time duration: 3:10 mins
          </Typography>
          <Typography variant="h5" sx={{ margin: "1rem 0", fontWeight: "500" }}>
            Description
          </Typography>

          <Typography variant="body2" sx={{ margin: "1rem 0" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            similique mollitia, explicabo nesciunt quam ut sunt ratione nam
            ipsum libero quae est temporibus laborum porro, dolor molestiae
            facere tempore reprehenderit! Quisquam corporis beatae autem
            repudiandae. Qui nobis illum accusantium. Excepturi, tempore a
            expedita quia corporis nisi nostrum obcaecati provident repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            quisquam, repudiandae ex nulla cupiditate ullam non saepe doloribus.
            Quo iusto error molestias, nemo sint, quia tempora consectetur,
            quasi impedit earum temporibus eligendi ipsam ad dicta voluptatem.
            Quae inventore odio voluptates soluta aliquam recusandae animi, qui,
            beatae quos fuga possimus esse hic laudantium aut nisi reprehenderit
            ullam eaque accusantium vitae expedita fugiat optio ratione
            explicabo. Odio suscipit totam saepe eveniet voluptates cupiditate
            quasi beatae fuga impedit numquam rerum excepturi aut quisquam,
            nihil architecto placeat quo quia sapiente. Beatae blanditiis quos
            esse repudiandae distinctio labore ratione? Voluptatem fugit numquam
            veritatis aut suscipit. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Hic similique mollitia, explicabo nesciunt quam ut
            sunt ratione nam ipsum libero quae est temporibus laborum porro,
            dolor molestiae facere tempore reprehenderit! Quisquam corporis
            beatae autem repudiandae. Qui nobis illum accusantium. Excepturi,
            tempore a expedita quia corporis nisi nostrum obcaecati provident
            repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Minima quisquam, repudiandae ex nulla cupiditate ullam non
            saepe doloribus. Quo iusto error molestias, nemo sint, quia tempora
            consectetur, quasi impedit earum temporibus eligendi ipsam ad dicta
            voluptatem. Quae inventore odio voluptates soluta aliquam recusandae
            animi, qui, beatae quos fuga possimus esse hic laudantium aut nisi
            reprehenderit ullam eaque accusantium vitae expedita fugiat optio
            ratione explicabo. Odio suscipit totam saepe eveniet voluptates
            cupiditate quasi beatae fuga impedit numquam rerum excepturi aut
            quisquam, nihil architecto placeat quo quia sapiente. Beatae
            blanditiis quos esse repudiandae distinctio labore ratione?
            Voluptatem fugit numquam veritatis aut suscipit.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Transcript;
