import { NextPage } from "next";
import * as Form from "@radix-ui/react-form";

interface Props {}

const ContactUsPage: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center pb-8">
      <h1 className="page_title px-20">Contact Me</h1>
      <div className="mx-20 px-20 flex flex-col gap-4">
        <Form.Root className="FormRoot">
          <Form.Field className="FormField" name="email">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between"
              }}
            >
              <Form.Label className="FormLabel">Email</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter your email
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                Please provide a valid email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="Input" type="email" required />
            </Form.Control>
          </Form.Field>
          <Form.Field className="FormField" name="question">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between"
              }}
            >
              <Form.Label className="FormLabel">Question</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter a question
              </Form.Message>
            </div>
            <Form.Control asChild>
              <textarea className="Textarea" required />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <button className="Button" style={{ marginTop: 10 }}>
              Post question
            </button>
          </Form.Submit>
        </Form.Root>
      </div>
    </div>
  );
};

export default ContactUsPage;
