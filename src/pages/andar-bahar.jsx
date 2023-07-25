import AndarBaharGameCards from "../components/andar-bahar/cards";
import AndarBaharRecords from "../components/andar-bahar/records";
import Layout from "../shared/layout";
import SubHeader from "../shared/sub-header";

const AndarBaharPage = () => {
  return (
    <Layout>
      <>
        <SubHeader subTitle="Andar Bahar" showRule />
        <div className="overflow-y-auto flex flex-col md:flex-row items-start justify-center w-full gap-[40px]">
          <AndarBaharGameCards />
          <AndarBaharRecords />
        </div>
      </>
    </Layout>
  );
};

export default AndarBaharPage;
