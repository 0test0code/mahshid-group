//@ts-nocheck
// 1) Find the column with the smallest height
// 2) Push the current image to that column
// 3) Get the height of the current image
// 4) Update the chosen column with the height of the image
import Image from "next/image";
const styles = {
    column :{
        display: "flex",
        gap: "8px",
        flexDirection: "column",
      },
      container :{
        position: "relative",
      },
};
let image:{
  title: string,
    Image: string,
    width: 290,
    height: 410,
    Description: string
}
//render images

export default function Masonry(props) {
  const { images, columnCount } = props
  const imageColumns = generateImageColumns(images, columnCount)

  return <div className={styles.container}>{renderColumns(imageColumns)}</div>
}
//To calculate the relative height we need to whip up a little function:
//to account for different image widths, heights, and aspect ratios.
const getRelativeImageHeight = (image, targetWidth) => {
  const { width, height } = image
  const widthQuotient = targetWidth / width
  const relativeHeight = widthQuotient * height

  return relativeHeight
}//Deal out the images across the columns:we need to iterate over out list of images and add them to the corresponding column.
//columns will have a value of [ [], [], [] ] if we run the script with a columnCount of 3.
//The below might look like some funky JavaScript,
//but it’s a handy utility that allows us to initialise an array with a specific length + a default value.
function generateImageColumns(images, columnCount = 3) {
  const columnHeights = Array(columnCount).fill(0)
  const columns = [...Array(columnCount)].map(() => [])

  images.forEach(image => {
    const smallestHeight = Math.min(...columnHeights)
    const indexOfSmallestHeight = columnHeights.indexOf(
      Math.min(...columnHeights)
    )

    const smallestColumn = columns[indexOfSmallestHeight]
    smallestColumn.push(image)
    const height = getRelativeImageHeight(image, 200)
    columnHeights[indexOfSmallestHeight] = smallestHeight + height
  })

  return columns
}
