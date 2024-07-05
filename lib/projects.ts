import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getProjectData(projectName: string) {
  const projectDir = path.join(projectsDirectory, projectName);
  const filePath = path.join(projectDir, '_home.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Read the image file
  const imageBuffer = fs.readFileSync(path.join(projectDir, 'img', 'cover.webp'));
  const base64Image = imageBuffer.toString('base64');
  const imageUrl = `data:image/webp;base64,${base64Image}`;

  return {
    frontmatter: {
      ...data,
      imageUrl,
    },
    content,
  };
}
export function getAllProjectSlugs() {
  const projectNames = fs.readdirSync(projectsDirectory);
  return projectNames.map((projectName) => ({
    params: {
      slug: projectName,
    },
  }));
}

export function getAllProjectData() {
  const projectNames = fs.readdirSync(projectsDirectory);

  const allProjectData = projectNames.map((projectName) => {
    const { frontmatter } = getProjectData(projectName);
    return {
      ...frontmatter,
      slug: projectName,
    };
  });

  return allProjectData;
}
