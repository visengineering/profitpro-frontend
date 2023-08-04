import React from "react";
import SalesRepresentativeDataTable from "./SalesRepresentativeDataTable";
import { Box, Breadcrumbs } from "@mui/material";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
const SaleRepresentativeTable = () => {
  let users = [
    {
      user_id: 123,
      password: "",
      last_login: null,
      is_superuser: false,
      is_staff: false,
      is_active: true,
      date_joined: "2023-08-03T14:34:15.180461Z",
      user_email: "maddy@gmail.com",
      user_display_name: "Maddy",
      first_name: "Maddy",
      last_name: "John",
      role: "",
      city: "",
      address1: "",
      address2: "",
      about: "",
      dealer_name: "",
      email: "",
      is_update: true,
      lot_address: "",
      notes: "",
      phone: "+1 123 1233124",
      state: "",
      token: "",
      user_image: "",
      user_avatar: "",
      user_nicename: "",
      zipcode: "",
      groups: [],
      user_permissions: [],
      transcripts: [],
    },
    {
      user_id: 272,
      password: "",
      last_login: null,
      is_superuser: false,
      is_staff: false,
      is_active: true,
      date_joined: "2023-08-03T15:09:43.627559Z",
      user_email: "dev.farhantariq12b@gmail.com",
      user_display_name: "Farhan",
      first_name: "Farhan",
      last_name: "Tariq",
      role: "manager",
      city: "",
      address1: "",
      address2: "",
      about: "",
      dealer_name: "Profit Pro",
      email: "dev.farhantariq12b@gmail.com",
      is_update: false,
      lot_address: "",
      notes: "",
      phone: "0342845929",
      state: "",
      token: "",
      user_image:
        "http://1.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?s=96&d=mm&r=g",
      user_avatar:
        "http://1.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?s=96&d=mm&r=g",
      user_nicename: "dev-farhantariq12bgmail-com",
      zipcode: "",
      groups: [],
      user_permissions: [],
      transcripts: [
        {
          conversation_id: 1,
          conversation_link: "dummy-link.com",
          transcript:
            "I'm tired of cafeteria food. Let's do something different tonight. Have anything particular in mind? There's a place on Dingzhou Road that has good steamed fried chive rolls, but they don't have any place to sit. We can bring them back to the student center to eat. Okay, let's go.\n",
          created_date: "2023-08-04T11:46:11.010457Z",
          modified_date: "2023-08-04T11:46:11.010548Z",
          duration: 230000,
        },
        {
          conversation_id: 2,
          conversation_link: "dummy-link.com",
          transcript:
            "I'm tired of cafeteria food. Let's do something different tonight. Have anything particular in mind? There's a place on Dingzhou Road that has good steamed fried chive rolls, but they don't have any place to sit. We can bring them back to the student center to eat. Okay, let's go.\n",
          created_date: "2023-08-04T11:47:08.792572Z",
          modified_date: "2023-08-04T11:47:08.792680Z",
          duration: 250000,
        },
        {
          conversation_id: 3,
          conversation_link: "dummy-link.com",
          transcript:
            "I'm tired of cafeteria food. Let's do something different tonight. Have anything particular in mind? There's a place on Dingzhou Road that has good steamed fried chive rolls, but they don't have any place to sit. We can bring them back to the student center to eat. Okay, let's go.\n",
          created_date: "2023-08-04T11:47:57.919928Z",
          modified_date: "2023-08-04T11:47:57.920051Z",
          duration: 210000,
        },
        {
          conversation_id: 4,
          conversation_link: "dummy-link.com",
          transcript:
            "I'm tired of cafeteria food. Let's do something different tonight. Have anything particular in mind? There's a place on Dingzhou Road that has good steamed fried chive rolls, but they don't have any place to sit. We can bring them back to the student center to eat. Okay, let's go.\n",
          created_date: "2023-08-04T11:48:12.052885Z",
          modified_date: "2023-08-04T11:48:12.052938Z",
          duration: 190000,
        },
        {
          conversation_id: 5,
          conversation_link: "dummy-link.com",
          transcript:
            "I'm tired of cafeteria food. Let's do something different tonight. Have anything particular in mind? There's a place on Dingzhou Road that has good steamed fried chive rolls, but they don't have any place to sit. We can bring them back to the student center to eat. Okay, let's go.\n",
          created_date: "2023-08-04T11:50:11.523498Z",
          modified_date: "2023-08-04T11:50:11.523556Z",
          duration: 150000,
        },
        {
          conversation_id: 6,
          conversation_link: "dummy-link.com",
          transcript:
            "I'm tired of cafeteria food. Let's do something different tonight. Have anything particular in mind? There's a place on Dingzhou Road that has good steamed fried chive rolls, but they don't have any place to sit. We can bring them back to the student center to eat. Okay, let's go.\n",
          created_date: "2023-08-04T12:33:14.771394Z",
          modified_date: "2023-08-04T12:33:14.771522Z",
          duration: 200000,
        },
        {
          conversation_id: 7,
          conversation_link: "dummy-link.com",
          transcript:
            "I'm tired of cafeteria food. Let's do something different tonight. Have anything particular in mind? There's a place on Dingzhou Road that has good steamed fried chive rolls, but they don't have any place to sit. We can bring them back to the student center to eat. Okay, let's go.\n",
          created_date: "2023-08-04T12:33:59.184279Z",
          modified_date: "2023-08-04T12:33:59.184383Z",
          duration: 300000,
        },
        {
          conversation_id: 8,
          conversation_link: "dummy-link.com",
          transcript:
            "I'm tired of cafeteria food. Let's do something different tonight. Have anything particular in mind? There's a place on Dingzhou Road that has good steamed fried chive rolls, but they don't have any place to sit. We can bring them back to the student center to eat. Okay, let's go.\n",
          created_date: "2023-08-04T12:35:34.149732Z",
          modified_date: "2023-08-04T12:35:34.149820Z",
          duration: 290000,
        },
        {
          conversation_id: 9,
          conversation_link: "dummy-link.com",
          transcript:
            "Section 3 You will hear part of a seminar entitled Understanding the World's Oceans given by a climate scientist. First, you have some time to look at questions 21 to 25 on pages 5 and 6. Now listen carefully and answer questions 21 to 25. Thanks to all of you for coming along today to hear about how the Robotic Float Project is helping with ocean research. Well, first of all, we'll look at what a robotic float does and its use. So let's start with the device itself. It looks a bit like a cigar and it's about one and a half metres long. More importantly, it's full of equipment that's designed to collect data. So it can help us in building up a profile of different factors which work together within the world's oceans. Sounds like a big project. Isn't it too big for one country to undertake? That's quite true, but this project is a really good example of international cooperation. Over the last five years, scientists from 13 countries have been taking part in the project and launching floats in their area of ocean control. And next year, this number will rise to 14 when Indonesia joins the project. That's impressive. But let's move on to how floats work. The operational cycle goes like this. Each of the floats is dropped in the ocean from a boat at a set point and activated from a satellite. Then the float immediately sinks about 2,000 metres. That's two whole kilometres down in the water. It stays at this depth for about 10 days and is carried around by the currents which operate in the ocean at this level. During this time, it's possible for it to cover quite large distances, but the average is 50 kilometres. So what is it actually recording? Well, at this stage, nothing. But as it rises to the surface, it collects all sorts of data. Most importantly, variations in salinity, that's salt levels, and the changes in temperature, a bit like underwater weather balloons. Then, when it gets back to the surface, all the data it's collected is beamed up to the satellite. After about five hours on the surface, the float automatically sinks, beginning the whole process again. Before you hear the rest of the conversation, you have some time to look at questions 26 to 30 on page 7. Now listen and answer questions 26 to 30. What happens to the data? Well, the information is transferred direct to onshore meteorological stations, like our one in Hobart, and within four hours the findings can be on computers and they can be mapped and analysed. You say you're building models of the world's ocean systems, but how are they going to be used, and more importantly, when? Some of the data has already helped in completing projects. For example, our understanding of the underlying causes of El Niño events is being confirmed by float data. Another way we're using float data is to help us to understand the mechanics of climate change, like global warming and ozone depletion. That's part of an ongoing variability study, but the results are still a long way off. However, this is not the case with our ocean weather forecasting. Because we know from the floats what the prevailing weather conditions will be in certain parts of the ocean, we can advise the Navy on search and rescue missions. That's happening right now, and many yachtsmen owe their lives to the success of this project. In addition, the float data can help us to look at the biological implications of ocean processes. Would that help with preserving fish stocks? Yes, and advising governments on fisheries legislation. We're well on the way to completing a project on this. We hope it will help to bring about more sustainable fishing practices. We'll be seeing the results of that quite soon. It sounds like the data from floats has lots of applications. Yes, it does. It's also a powerful agricultural tool. If we were aware of what the weather would be like, say, next year, we could make sure that the farmers planted appropriate grain varieties to produce the best yield from the available rainfall. That sounds a bit like science fiction, especially when now we can't even tell them when a drought will break. I agree that this concept is still a long way in the future, but it will come eventually, and the float data will have made a contribution. That is the end of Section 3. You now have half a minute to check your answers. Now turn to Section 4 on page 8.\n",
          created_date: "2023-08-04T12:36:34.700246Z",
          modified_date: "2023-08-04T12:36:34.700312Z",
          duration: 280000,
        },
      ],
    },
  ];
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: "#233eae",
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.24),
      },
    };
  });

  return (
    <Box className="box-container">
      <Box role="presentation" sx={{ margin: "1rem" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb
            sx={{ background: "silver" }}
            component="a"
            href="#"
            label="Sales Representatives"
            icon={<HomeIcon fontSize="small" />}
          />
          <StyledBreadcrumb
            component="a"
            href="salesRepresentative/123/transcripts"
            label="Transcripts"
          />
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></Box>
      <SalesRepresentativeDataTable rows={users} />
    </Box>
  );
};

export default SaleRepresentativeTable;
