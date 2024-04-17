import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Questions() {
  return (
    <>
      <div>
        <h1 className="text-center font-bold my-3 text-3xl mt-[50px]">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="mx-12 md:mx-auto md:w-[950px] md:mb-[40px] ">
        <Accordion type="single" collapsible className="md:w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How can my child get assistance if they're stuck on a coding
              challenge?
            </AccordionTrigger>
            <AccordionContent>
              We offer various avenues for assistance. Your child can receive
              help from our experienced instructors during live coding sessions
              or through our online platform's chat support feature. We also
              encourage collaboration among students in our dedicated forum,
              where they can ask questions and share solutions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What support is available for beginners?
            </AccordionTrigger>
            <AccordionContent>
              We understand that coding can be daunting for beginners. That's
              why we provide comprehensive tutorials and interactive lessons
              designed specifically for students in grades 1 to 8. Our
              instructors are trained to offer personalized guidance and support
              to help your child navigate their coding journey with confidence.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How can I track my child's progress in the coding program?
            </AccordionTrigger>
            <AccordionContent>
              Parents can monitor their child's progress through our parent
              portal, which provides real-time updates on completed assignments,
              quiz scores, and overall performance. Additionally, our
              instructors are available to discuss your child's progress and
              address any concerns you may have.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Are the coding lessons interactive and engaging for young
              learners?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! We believe in making learning fun and engaging for
              students of all ages. Our coding lessons incorporate interactive
              games, projects, and hands-on activities to keep young learners
              motivated and excited about coding. We also encourage creativity
              and exploration, allowing students to express themselves through
              their coding projects.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Do students need any prior coding experience to enroll?
            </AccordionTrigger>
            <AccordionContent>
              No prior coding experience is required to join our program. Our
              curriculum is designed to accommodate students of all skill
              levels, from absolute beginners to more advanced learners. Our
              instructors will guide your child through each lesson, ensuring
              they build a strong foundation in coding regardless of their prior
              experience.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              How often are new coding challenges and projects introduced?
            </AccordionTrigger>
            <AccordionContent>
              We regularly update our curriculum with new coding challenges and
              projects to keep students engaged and challenged. New challenges
              are introduced on a bi-weekly basis, providing students with
              continuous opportunities to learn and grow their coding skills.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              Can my child showcase their coding projects in a portfolio or
              share them with friends and family?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! We encourage students to showcase their coding
              projects in portfolios, share them with friends and family, and
              even participate in coding competitions and exhibitions. Coding is
              a valuable skill that should be celebrated and shared with others.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              How can I enroll my child in SmartBrains Kenya's coding program?
            </AccordionTrigger>
            <AccordionContent>
              Enrolling your child in our coding program is easy! Simply visit
              our website and fill out the registration form. Once registered,
              you'll gain access to our online platform, where your child can
              start learning and coding right away. If you have any questions or
              need assistance with the enrollment process, our team is here to
              help.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
