import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const WebPLPWithFilterExpanded = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.webplpwithFilterExpanded}>
      <img
        className={styles.webplpwithFilterExpandedChild}
        alt=""
        src="/rectangle-29437@2x.png"
      />
      <div className={styles.discoverOurProductsParent}>
        <div className={styles.discoverOurProducts}>Discover our products</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </div>
      </div>
      <div className={styles.filters}>
        <div className={styles.customizable}>
          <div className={styles.value2}>
            <div className={styles.checkbox} />
            <b className={styles.customizble}>Customizble</b>
          </div>
        </div>
        <div className={styles.seperator} />
        <div className={styles.filter1}>
          <div className={styles.title}>
            <div className={styles.name}>
              <b className={styles.idealFor}>IDEAL FOR</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.all}>All</div>
          </div>
          <div className={styles.values}>
            <div className={styles.unselectAll}>Unselect all</div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Men</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Women</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>{`Baby & Kids`}</div>
            </div>
          </div>
        </div>
        <div className={styles.seperator} />
        <div className={styles.filter1}>
          <div className={styles.title}>
            <div className={styles.name}>
              <b className={styles.idealFor}>occasion</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.all}>All</div>
          </div>
          <div className={styles.values1}>
            <div className={styles.unselectAll}>Unselect All</div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Rainy Season (1)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Casual (3)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Wedding (1)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Party (10)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Regular (2)</div>
            </div>
          </div>
        </div>
        <div className={styles.seperator} />
        <div className={styles.filter1}>
          <div className={styles.title}>
            <div className={styles.name}>
              <b className={styles.idealFor}>work</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.all}>All</div>
          </div>
          <div className={styles.values1}>
            <div className={styles.unselectAll}>Unselect All</div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>French Knot (2)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Zardosi (2)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Fancy (1)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Embroidery (1)</div>
            </div>
          </div>
        </div>
        <div className={styles.seperator} />
        <div className={styles.filter1}>
          <div className={styles.title}>
            <div className={styles.name}>
              <b className={styles.idealFor}>fabric</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.all}>All</div>
          </div>
          <div className={styles.values1}>
            <div className={styles.unselectAll}>Unselect All</div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Muslin (1)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Satin Blend (1)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Satin (1)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Tericoat (1)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Linen (5)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Raw Silk (2)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Cotton (13)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Silk (2)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Cotton Silk (3)</div>
            </div>
          </div>
        </div>
        <div className={styles.filter5}>
          <div className={styles.title}>
            <div className={styles.name}>
              <div className={styles.jacketMaterial}>jacket material</div>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.all}>All</div>
          </div>
          <div className={styles.values}>
            <div className={styles.unselectAll}>Unselect All</div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Velvet (5)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Cotton (7)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Leather (13)</div>
            </div>
          </div>
        </div>
        <div className={styles.filter5}>
          <div className={styles.title}>
            <div className={styles.name}>
              <div className={styles.jacketMaterial}>sleeve length</div>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.all}>All</div>
          </div>
          <div className={styles.values}>
            <div className={styles.unselectAll}>Unselect All</div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Half Sleeve (2)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Cap Sleeve (10)</div>
            </div>
          </div>
        </div>
        <div className={styles.seperator} />
        <div className={styles.filter1}>
          <div className={styles.title}>
            <div className={styles.name}>
              <b className={styles.idealFor}>segment</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.all}>All</div>
          </div>
          <div className={styles.values1}>
            <div className={styles.unselectAll}>Unselect All</div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Silver (4)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Ethnic (2)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Contemporary (11)</div>
            </div>
          </div>
        </div>
        <div className={styles.seperator} />
        <div className={styles.filter1}>
          <div className={styles.title}>
            <div className={styles.name}>
              <b className={styles.idealFor}>suitable for</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.all}>All</div>
          </div>
          <div className={styles.values1}>
            <div className={styles.unselectAll}>Unselect All</div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Formal Wear (1)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Western Wear (1)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Casual Wear (7)</div>
            </div>
          </div>
        </div>
        <div className={styles.filter5}>
          <div className={styles.title}>
            <div className={styles.name}>
              <div className={styles.jacketMaterial}>sleeve</div>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.all}>All</div>
          </div>
          <div className={styles.values}>
            <div className={styles.unselectAll}>Unselect All</div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Roll-Up Sleeve (1)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Regular Sleeves (1)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Long Sleeve (1)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Full Sleeve (5)</div>
            </div>
          </div>
        </div>
        <div className={styles.seperator} />
        <div className={styles.filter1}>
          <div className={styles.title}>
            <div className={styles.name}>
              <b className={styles.idealFor}>raw materials</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.all}>All</div>
          </div>
          <div className={styles.values1}>
            <div className={styles.unselectAll}>Unselect All</div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Wool (2)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Silk (2)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Leather (2)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Cotton (5)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Cellulosic Fibers (4)</div>
            </div>
          </div>
        </div>
        <div className={styles.seperator} />
        <div className={styles.filter1}>
          <div className={styles.title}>
            <div className={styles.name}>
              <b className={styles.idealFor}>Pattern</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.all}>All</div>
          </div>
          <div className={styles.values1}>
            <div className={styles.unselectAll}>Unselect All</div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Windowpane (2)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Pinstripes (1)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Solid (2)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Chalk Stripes (2)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Slim Fit (1)</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.checkbox1} />
              <div className={styles.men}>Tartan (1)</div>
            </div>
          </div>
        </div>
        <div className={styles.seperator} />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent2}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent3}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent4}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent5}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent6}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent7}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent8}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent9}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent10}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent11}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.productNameParent}>
            <b className={styles.productName}>Product Name</b>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent12}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-29438@2x.png"
          />
          <div className={styles.ppxocMilkywayDressInPresseParent}>
            <b className={styles.ppxocMilkywayDress}>Product Name</b>
            <div className={styles.exploreThisSkill}>Explore this skill</div>
            <div className={styles.signInOrContainer15}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
            <img
              className={styles.vuesaxlinearheartIcon15}
              alt=""
              src="/vuesaxlinearheart1.svg"
            />
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productCardChild} />
          <div className={styles.image}>
            <img
              className={styles.hoverPicIcon}
              alt=""
              src="/rectangle-29438@2x.png"
            />
            <img
              className={styles.hoverPicIcon}
              alt=""
              src="/rectangle-29438@2x.png"
            />
          </div>
          <div className={styles.ppxocMilkywayDressInPresseParent}>
            <b className={styles.ppxocMilkywayDress}>
              PPXOC Milkyway dress in pressed flowers
            </b>
            <div className={styles.exploreThisSkill}>Explore this skill</div>
            <div className={styles.signInOrContainer15}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
            <img
              className={styles.vuesaxlinearheartIcon15}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
          </div>
        </div>
        <div className={styles.productCard1}>
          <div className={styles.productCardChild} />
          <div className={styles.image}>
            <div className={styles.hoverPic} />
            <img
              className={styles.hoverPicIcon}
              alt=""
              src="/front-pic@2x.png"
            />
          </div>
          <div className={styles.ppxocMilkywayDressInPresseParent}>
            <b className={styles.ppxocMilkywayDress}>
              PPXOC Milkyway dress in pressed flowers
            </b>
            <div className={styles.exploreThisSkill}>Explore this skill</div>
            <div className={styles.signInOrContainer15}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
            </div>
            <img
              className={styles.vuesaxlinearheartIcon15}
              alt=""
              src="/vuesaxlinearheart.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.headerParent}>
        <div className={styles.header}>
          <img className={styles.logoIcon} alt="" src="/logo.svg" />
          <div className={styles.tabs}>
            <div className={styles.tab1Parent}>
              <div className={styles.tab1}>
                <b className={styles.shop}>SHOP</b>
              </div>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.tab2Parent}>
              <div className={styles.tab2}>
                <b className={styles.shop}>SKILLS</b>
              </div>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.tab3}>
              <b className={styles.shop}>STORIES</b>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.tab2Parent}>
              <b className={styles.shop}>ABOUT</b>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.tab5}>
              <b className={styles.shop}>CONTACT US</b>
              <div className={styles.frameChild} />
            </div>
          </div>
          <div className={styles.icons}>
            <img
              className={styles.vuesaxlinearsearchNormalIcon}
              alt=""
              src="/vuesaxlinearsearchnormal.svg"
            />
            <img
              className={styles.vuesaxlinearsearchNormalIcon}
              alt=""
              src="/vuesaxlinearheart2.svg"
            />
            <img
              className={styles.vuesaxlinearsearchNormalIcon}
              alt=""
              src="/vuesaxlinearshoppingbag.svg"
            />
            <img
              className={styles.vuesaxlinearsearchNormalIcon}
              alt=""
              src="/vuesaxtwotoneprofile.svg"
            />
            <div className={styles.language}>
              <img className={styles.indiaInIcon} alt="" src="/india-in.svg" />
              <img className={styles.languageChild} alt="" src="/star-1.svg" />
              <b className={styles.eng}>ENG</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
          </div>
          <div className={styles.icons1}>
            <img
              className={styles.vuesaxlinearsearchNormalIcon1}
              alt=""
              src="/vuesaxlinearsearchnormal1.svg"
            />
            <img
              className={styles.vuesaxlinearsearchNormalIcon}
              alt=""
              src="/vuesaxlinearsearchnormal.svg"
            />
            <div className={styles.language}>
              <img className={styles.indiaInIcon} alt="" src="/india-in1.svg" />
              <img className={styles.languageChild} alt="" src="/star-1.svg" />
              <b className={styles.eng}>ENG</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
          </div>
          <div className={styles.logo}>LOGO</div>
        </div>
        <div className={styles.greyStrip}>
          <div className={styles.vuesaxlinearelement4Parent}>
            <img
              className={styles.vuesaxlinearelement4Icon}
              alt=""
              src="/vuesaxlinearelement4.svg"
            />
            <div className={styles.eng}>Lorem ipsum dolor</div>
          </div>
          <div className={styles.vuesaxlinearelement4Parent}>
            <img
              className={styles.vuesaxlinearelement4Icon}
              alt=""
              src="/vuesaxlinearelement4.svg"
            />
            <div className={styles.eng}>Lorem ipsum dolor</div>
          </div>
          <div className={styles.vuesaxlinearelement4Parent}>
            <img
              className={styles.vuesaxlinearelement4Icon}
              alt=""
              src="/vuesaxlinearelement4.svg"
            />
            <div className={styles.eng}>Lorem ipsum dolor</div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.groupContainer}>
          <img className={styles.frameInner} alt="" src="/group-136188.svg" />
          <img className={styles.frameInner} alt="" src="/group-136190.svg" />
          <img className={styles.frameInner} alt="" src="/group-136192.svg" />
          <div className={styles.frameInner}>
            <div className={styles.rectangleDiv} />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <img className={styles.frameInner} alt="" src="/group-136194.svg" />
          <div className={styles.frameInner}>
            <div className={styles.groupChild13} />
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.fbParent}>
            <div className={styles.fb}>
              <div className={styles.abefore} />
              <img className={styles.svgIcon} alt="" src="/svg.svg" />
            </div>
            <div className={styles.insta}>
              <div className={styles.abefore} />
              <img className={styles.svgIcon} alt="" src="/svg1.svg" />
            </div>
            <div className={styles.fb}>
              <div className={styles.abefore} />
              <img
                className={styles.twitter3SvgrepoCom1Icon}
                alt=""
                src="/twitter3svgrepocom-1.svg"
              />
            </div>
            <div className={styles.insta}>
              <div className={styles.abefore3} />
              <img
                className={styles.mdilinkedinIcon}
                alt=""
                src="/mdilinkedin.svg"
              />
            </div>
          </div>
          <b className={styles.followUs}>Follow Us</b>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.aboutUsParent}>
            <div className={styles.men}>About Us</div>
            <div className={styles.men}>Stories</div>
            <div className={styles.men}>Artisans</div>
            <div className={styles.men}>Boutiques</div>
            <div className={styles.men}>Contact Us</div>
            <div className={styles.men}>EU Compliances Docs</div>
            <div className={styles.joinAsA}>Join as a Seller</div>
          </div>
          <b className={styles.mettMuse}>mettā muse</b>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.aboutUsParent}>
            <div className={styles.men}>{`Orders & Shipping`}</div>
            <div className={styles.men}>Join/Login as a Seller</div>
            <div className={styles.men}>{`Payment & Pricing`}</div>
            <div className={styles.men}>{`Return & Refunds`}</div>
            <div className={styles.men}>FAQs</div>
            <div className={styles.men}>Privacy Policy</div>
            <div className={styles.men}>{`Terms & Conditions`}</div>
          </div>
          <b className={styles.quickLinks}>Quick Links</b>
        </div>
        <div className={styles.footerItem} />
        <div className={styles.subscribe}>
          <div className={styles.input}>
            <div className={styles.men}>Enter your e-mail...</div>
          </div>
          <div className={styles.button}>
            <div className={styles.jacketMaterial}>Subscribe</div>
          </div>
        </div>
        <b className={styles.beTheFirst}>Be the first to know</b>
        <b className={styles.contactUs2}>CONTACT US</b>
        <b className={styles.currency}>Currency</b>
        <b className={styles.mettMuseAcceptsContainer}>
          {`mettā muse `}
          <span className={styles.accepts}>Accepts</span>
        </b>
        <div className={styles.signUpFor}>
          Sign up for updates from mettā muse.
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>+44 221 133 5360</div>
          <div className={styles.customercaremettamusecom}>
            customercare@mettamuse.com
          </div>
          <img className={styles.starIcon} alt="" src="/star-11.svg" />
        </div>
        <div className={styles.language2}>
          <img
            className={styles.unitedStatesOfAmericaUs}
            alt=""
            src="/united-states-of-america-us.svg"
          />
          <img className={styles.languageInner} alt="" src="/star-11.svg" />
          <b className={styles.eng}>USD</b>
        </div>
        <div className={styles.transactionsWillBe}>
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </div>
        <div className={styles.footerInner} />
        <div className={styles.copyright2023}>
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
      <div className={styles.rectangleParent15}>
        <div className={styles.groupChild14} />
        <div className={styles.lineDiv} />
        <div className={styles.groupChild15} />
        <b className={styles.items}>3425 Items</b>
        <div className={styles.vuesaxlineararrowLeftParent}>
          <img
            className={styles.vuesaxlinearelement4Icon}
            alt=""
            src="/vuesaxlineararrowleft.svg"
          />
          <div className={styles.hideFilter}>HIDE FILTER</div>
        </div>
        <div className={styles.filterParent}>
          <div className={styles.filter}>Filter</div>
          <div className={styles.frameChild3} />
          <div className={styles.frameWrapper}>
            <div className={styles.loremParent}>
              <b className={styles.filter}>Lorem</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameChild3} />
          <div className={styles.loremGroup}>
            <b className={styles.filter}>Lorem</b>
            <img
              className={styles.vuesaxlineararrowLeftIcon}
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
          <div className={styles.frameChild3} />
          <div className={styles.loremGroup}>
            <b className={styles.filter}>Lorem</b>
            <img
              className={styles.vuesaxlineararrowLeftIcon}
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
          <div className={styles.frameChild3} />
          <div className={styles.loremGroup}>
            <b className={styles.filter}>Lorem</b>
            <img
              className={styles.vuesaxlineararrowLeftIcon}
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
          <div className={styles.frameChild3} />
          <div className={styles.loremGroup}>
            <b className={styles.filter}>LOREM</b>
            <img
              className={styles.vuesaxlineararrowLeftIcon}
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
        </div>
        <div className={styles.rectangleParent16}>
          <div className={styles.groupChild14} />
          <div className={styles.groupChild17} />
          <div className={styles.groupChild18} />
          <b className={styles.items1}>3425 Items</b>
          <div className={styles.vuesaxlineararrowLeftGroup}>
            <img
              className={styles.vuesaxlinearelement4Icon}
              alt=""
              src="/vuesaxlineararrowleft.svg"
            />
            <div className={styles.hideFilter}>HIDE FILTER</div>
          </div>
          <div className={styles.filterParent}>
            <div className={styles.filter}>Filter</div>
            <div className={styles.frameChild3} />
            <div className={styles.frameWrapper}>
              <div className={styles.loremParent}>
                <b className={styles.filter}>Lorem</b>
                <img
                  className={styles.vuesaxlineararrowLeftIcon}
                  alt=""
                  src="/vuesaxlineararrowleft@2x.png"
                />
              </div>
            </div>
            <div className={styles.frameChild3} />
            <div className={styles.loremGroup}>
              <b className={styles.filter}>Lorem</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.frameChild3} />
            <div className={styles.loremGroup}>
              <b className={styles.filter}>Lorem</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.frameChild3} />
            <div className={styles.loremGroup}>
              <b className={styles.filter}>Lorem</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.frameChild3} />
            <div className={styles.loremGroup}>
              <b className={styles.filter}>LOREM</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
          </div>
          <div
            className={styles.rectangleParent17}
            onClick={onGroupContainerClick}
          >
            <div className={styles.groupChild19} />
            <div className={styles.sort}>Sort</div>
            <div className={styles.groupChild20} />
            <div className={styles.recommendedParent}>
              <b className={styles.filter}>RECOMMENDED</b>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className={styles.newestFirst}>Newest first</div>
            <div className={styles.priceHigh}>Price : high to low</div>
            <div className={styles.popular}>popular</div>
            <div className={styles.priceLow}>Price : low ot high</div>
          </div>
        </div>
        <div className={styles.rectangleParent18}>
          <div className={styles.groupChild21} />
          <div className={styles.sort1}>Sort</div>
          <div className={styles.groupChild22} />
          <div className={styles.materialSymbolscheckSmallRParent}>
            <img
              className={styles.materialSymbolscheckSmallRIcon}
              alt=""
              src="/materialsymbolschecksmallrounded.svg"
            />
            <b className={styles.filter}>recommended</b>
          </div>
          <div className={styles.priceHigh1}>Price : high to low</div>
          <div className={styles.newestFirst1}>Newest first</div>
          <div className={styles.popular1}>popular</div>
          <div className={styles.priceLow1}>Price : low to high</div>
        </div>
      </div>
    </div>
  );
};

export default WebPLPWithFilterExpanded;
