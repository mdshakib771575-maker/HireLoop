
import { getCompanyJob } from "@/lib/api/jobs";
import { Table, Chip, Button } from "@heroui/react";
import { Eye, Pencil, Trash2 } from "lucide-react";

const RecruterJobsPage = async () => {
  const companyId = "company_123";
  const jobs = await getCompanyJob(companyId);

  // uporer function ta amra nice jevave korci, korte per tam  and nicer ta amar kase sohoj lage kintu alada folder ar kaje comport hoibar jonno ei vabe kora 

    //     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    //  const getCompanyJob = async(companyId,status="active")=>{
    //     const res = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`);
    //     return res.json();}


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Jobs</h1>

      <Table>
        <Table.ResizableContainer>
          <Table.Content
            aria-label="Jobs Table"
            className="min-w-[900px]"
          >
            <Table.Header>
              <Table.Column
                isRowHeader
                defaultWidth="2fr"
                minWidth={200}
              >
                Job Title
                <Table.ColumnResizer />
              </Table.Column>

              <Table.Column
                defaultWidth="1fr"
                minWidth={150}
              >
                Type/Category
                <Table.ColumnResizer />
              </Table.Column>

              <Table.Column
                defaultWidth="1fr"
                minWidth={150}
              >
                Deadline
                <Table.ColumnResizer />
              </Table.Column>

              <Table.Column
                defaultWidth="1fr"
                minWidth={120}
              >
                Status
                <Table.ColumnResizer />
              </Table.Column>

              <Table.Column
                defaultWidth="1fr"
                minWidth={180}
              >
                Actions
              </Table.Column>
            </Table.Header>

            <Table.Body>
              {jobs?.map((job) => (
                <Table.Row key={job._id}>
                  <Table.Cell>{job.jobTitle}</Table.Cell>

                  <Table.Cell className="capitalize">
                    {job.jobType}
                  </Table.Cell>

                  <Table.Cell>
                    {job.deadline}
                  </Table.Cell>

                  <Table.Cell>
                    <Chip
                      color={
                        job.status === "active"
                          ? "success"
                          : "danger"
                      }
                      size="sm"
                      variant="soft"
                    >
                      {job.status}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    <div className="flex items-center gap-2">
                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                      >
                        <Eye size={18} />
                      </Button>

                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                      >
                        <Pencil size={18} />
                      </Button>

                      <Button
                        isIconOnly
                        size="sm"
                        color="danger"
                        variant="light"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ResizableContainer>
      </Table>
    </div>
  );
};

export default RecruterJobsPage;