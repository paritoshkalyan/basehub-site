import { Button } from "@/common/button";
import { AuthLayout, RichTextFormWrapper, formWrapperFragment } from "../_components/auth-layout";
import { LabeledInput, LabeledWrapper } from "../_components/labeled-input";
import { Selector } from "../_components/select";
import { BackToHomeButton } from "../_components/back-to-home-button";
import { Pump } from "basehub/react-pump";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function SignUp() {
  return (
    <Pump
      queries={[
        {
          site: {
            signUp: {
              wrapper: formWrapperFragment,
              howDidYouHearAboutUs: true,
            },
          },
        },
      ]}
    >
      {async ([{ site }]) => {
        "use server";

        return (
          <AuthLayout
            subtitle={
              site.signUp.wrapper.subtitle ? (
                <RichTextFormWrapper>
                  {site.signUp.wrapper.subtitle.json.content}
                </RichTextFormWrapper>
              ) : null
            }
            title={site.signUp.wrapper.title}
          >
            <form className="flex flex-col gap-3">
              <LabeledInput
                required
                label="First Name"
                name="name"
                placeholder="Jhon"
                type="text"
              />
              <LabeledInput
                required
                label="Last Name"
                name="last-name"
                placeholder="Doe"
                type="text"
              />
              <LabeledInput
                required
                label="Email Address"
                name="email"
                placeholder="jdoe@gmail.com"
                type="email"
              />
              <LabeledInput
                required
                label="Password"
                name="password"
                placeholder="Type a secure password"
                type="password"
              />
              <LabeledWrapper label="How did you hear about us?">
                <Selector
                  options={site.signUp.howDidYouHearAboutUs.map((option) => ({
                    label: option,
                    value: option,
                  }))}
                />
              </LabeledWrapper>
              <div className="mt-2 flex items-center justify-between">
                <Button
                  icon={<ArrowRightIcon className="size-5" />}
                  iconSide="right"
                  intent={site.signUp.wrapper.cta.type}
                  type="submit"
                >
                  {site.signUp.wrapper.cta.label}
                </Button>
                <BackToHomeButton />
              </div>
            </form>
          </AuthLayout>
        );
      }}
    </Pump>
  );
}
