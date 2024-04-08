import { useLayoutEffect, useRef, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import {
  Avatar,
  Button,
  Input,
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import { getCookie } from "../../../utils/cookies";
import { customerDataType } from "../../../utils/types";

const pageSize = 16;

const CustomerList: React.FC = () => {
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const token = getCookie("token");

  const [customerList, setCustomerList] = useState<customerDataType[]>([]);
  const [receivedCustomerData, setReceivedCustomerData] = useState(-1);
  const [pageNumber, setPageNumber] = useState(1);
  const [itemCount, setItemCount] = useState(0);
  const [search, setSearch] = useState("");
  const searchRef = useRef(document.createElement("input"));

  async function getAllCustomer() {
    try {
      const response = await axios.get(
        `${apiUrl}/admin/customers?start=${(pageNumber - 1) * pageSize}&end=16&search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.data.success) {
        setReceivedCustomerData(0);
      } else {
        console.log(response.data.payload);
        setCustomerList(response.data.payload.result);
        setItemCount(response.data.payload.total);
        if (response.data.payload.result.length > 0) {
          setReceivedCustomerData(1);
        } else {
          setReceivedCustomerData(0);
        }
      }
    } catch (error) {
      console.log(error);
      setCustomerList([]);
    }
  }

  useLayoutEffect(() => {
    getAllCustomer();
  }, [apiUrl, pageNumber, search]);

  return (
    <div className="bg-[#28292b] flex flex-col justify-center items-center0 py-[5rem] min-h-[100vh]">
      <div className="text-3xl text-white font-bold text-center">CUSTOMER LIST</div>

      <div className="mx-auto py-10 overflow-x-scroll">
        <div className="flex justify-center">
          <Input
            classNames={{
              base: "h-10 max-w-[20rem]",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search"
            size="sm"
            type="search"
            ref={searchRef}
            radius="none"
          />
          <Button color="danger" radius="none" isIconOnly onClick={() => setSearch(searchRef.current.value)}>
            <IoSearch className="text-xl" />
          </Button>
        </div>

        {receivedCustomerData === 1 ? (
          <>
            <Table
              aria-label="Items Table"
              className="mt-[3rem] dark"
              radius="none"
              isCompact
              classNames={{
                base: "max-w-[100vw]",
              }}
            >
              <TableHeader>
                <TableColumn>User Id</TableColumn>
                <TableColumn>Name</TableColumn>
                <TableColumn>Email</TableColumn>
                <TableColumn>Address</TableColumn>
                <TableColumn>Contact</TableColumn>
                <TableColumn>Platform Visits</TableColumn>
                <TableColumn>Items Purchased</TableColumn>
                <TableColumn>Signup Date</TableColumn>
              </TableHeader>
              <TableBody>
                {customerList.map((data, index) => (
                  <TableRow key={index} className="text-white">
                    <TableCell className="text-default-500">{data.user_id}</TableCell>
                    <TableCell className="flex gap-[0.5rem] items-center max-w-[20rem]">
                      <Avatar
                        radius="none"
                        src={`${apiUrl}/users/profileImages/${data.user_id}.jpg`}
                        className="shrink-0"
                      />
                      <p>{data.username}</p>
                    </TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell className="max-w-[15rem]">{`${data.address}, ${data.city}, ${data.state}, ${data.address_code} .`}</TableCell>
                    <TableCell>{data.phone}</TableCell>
                    <TableCell>{data.visit_count}</TableCell>
                    <TableCell>{data.purchase_count}</TableCell>
                    <TableCell>{data.registration_date.slice(0, 10)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="py-[2rem] grow flex justify-center">
              <Pagination
                loop
                showControls
                radius="none"
                color="danger"
                variant="bordered"
                className="dark"
                onChange={(pageNumber) => setPageNumber(pageNumber)}
                total={itemCount ? Math.ceil(itemCount / pageSize) : 1}
                initialPage={1}
              />
            </div>
          </>
        ) : receivedCustomerData === -1 ? (
          <Table aria-label="Items Table" className="mt-[3rem] dark" radius="none" isCompact>
            <TableHeader>
              <TableColumn>User Id</TableColumn>
              <TableColumn>Name</TableColumn>
              <TableColumn>Email</TableColumn>
              <TableColumn>Address</TableColumn>
              <TableColumn>Contact</TableColumn>
              <TableColumn>Platform Visits</TableColumn>
            </TableHeader>
            <TableBody isLoading={true} loadingContent={<Spinner label="Loading..." />}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((data, index) => (
                <TableRow key={index} className="text-white">
                  <TableCell className="text-[#18181b]">1</TableCell>
                  <TableCell className="text-[#18181b]">1</TableCell>
                  <TableCell className="text-[#18181b]">1</TableCell>
                  <TableCell className="text-[#18181b]">1</TableCell>
                  <TableCell className="text-[#18181b]">1</TableCell>
                  <TableCell className="text-[#18181b]">1</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="w-full h-[50vh] flex justify-center items-center">
            <p className="font-bold text-2xl text-default-300">No Customer Data Found</p>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default CustomerList;
