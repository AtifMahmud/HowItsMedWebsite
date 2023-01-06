import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType
} from 'beautiful-skill-tree';

function Tree() {
    return (
      <div>
      // <div headercontent />
        <SkillProvider>
          <SkillTreeGroup>
            {() => {
              return (
                <SkillTree treeId="basic-birch" title="First Skill Tree" data={[data]} />
              )
            }}
          </SkillTreeGroup>
        </SkillProvider>
      </div>
    );
  }


  const data2 = {
    id: 'intern',
    title: 'Intern',
    tooltip: {
      description : "The parent node, all of the descendants will be locked until it's selected",
    },
    children: [
    // rinse and repeat; always repeat.
  ]}

  const data3 = {
    id: 'resident',
    title: 'Resident',
    tooltip: {
      description : "The parent node, all of the descendants will be locked until it's selected",
    },
    children: [
    // rinse and repeat; always repeat.
  ]}

  const data = {
    id: 'student',
    title: 'Student',
    tooltip: {
      description : "The parent node, all of the descendants will be locked until it's selected",
    },
    children: [
        data2,
        data3,
    // rinse and repeat; always repeat.
  ]}

  export default Tree;