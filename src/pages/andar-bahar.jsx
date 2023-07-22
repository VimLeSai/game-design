import AndarBaharGameCards from "../components/andar-bahar/cards";
import AndarBaharRecords from "../components/andar-bahar/records";
import Layout from "../shared/layout";
import SubHeader from "../shared/sub-header";

const AndarBaharPage = () => {
  return (
    <Layout>
      <>
        <SubHeader subTitle="Andar Bahar" showRule />
        <div className="overflow-y-auto flex items-center justify-center gap-[40px]">
          <AndarBaharGameCards />
          <AndarBaharRecords />
        </div>
      </>
    </Layout>
  );
};

export default AndarBaharPage;
